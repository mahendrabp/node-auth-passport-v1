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

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(req.body?.email);
  const userUpdate = req.body;
  await User.findByIdAndUpdate(id, userUpdate);
  return res.status(200).json({
    msg: 'User successfully updated!',
    user: userUpdate,
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await User.findByIdAndRemove(id);
  return res.status(200).json({
    msg: 'User deleted successfully!',
  });
};
