import { Response, Request } from 'express';
import User from '../models/User';

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = User.find({});
  return res.json(users);
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = req.params;
  const user = User.findById(id);
  return res.json(user);
};
