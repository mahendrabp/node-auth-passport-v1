import { Router } from 'express';
import { getUserById, getUsers } from '../controllers/user.controller';
import passport from 'passport';

const router = Router();

router.get('/', getUsers);
router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  getUserById
);

export const UserRoutes: Router = router;
