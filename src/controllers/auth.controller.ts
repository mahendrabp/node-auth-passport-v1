import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';
import configs from '../configs/configuration';

function createToken(user: IUser) {
  return jwt.sign({ id: user.id, email: user.email }, configs.jwt_default, {
    expiresIn: 24 * 60 * 60,
  });
}

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

export const login = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      msg: 'fill your email and password',
    });
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({
      msg: 'user does not exist!',
    });
  }

  const isMatching = await user.comparePassword(req.body.password);
  if (isMatching) {
    res.status(200).json({ token: createToken(user) });
  }

  return res.status(400).json({
    msg: 'email or password wrong!',
  });
};
