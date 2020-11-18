import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      msg: 'fill your email and password',
    });
  }

  const user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({
      msg: 'User exists!',
    });
  }

  const newUser = new User(req.body);
  await newUser.save();
  return res.status(201).json(newUser);
};
