import { Response, Request } from 'express';
import User from '../models/User';

export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await User.find({});
  return res.json(users);
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  // console.log(req.params.id);
  const { id } = await req.params;
  // console.log({ id });
  const user = await User.findById(id);
  return res.json(user);
};
