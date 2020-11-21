import { Router } from 'express';
import {
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
} from '../controllers/user.controller';
import passport from 'passport';

const router = Router();

router.get('/', getUsers);
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  getUserById
);

router.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  updateUser
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  deleteUser
);

export const UserRoutes: Router = router;
