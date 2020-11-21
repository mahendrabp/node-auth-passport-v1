import { Router } from 'express';
import { AuthRoutes } from './auth.routes';
import { UserRoutes } from './user.routes';

const router: Router = Router();

router.get('/', (req, res) => {
  res.send('Hello World"!');
});

router.use('/', AuthRoutes);
router.use('/users', UserRoutes);

export const RouteNav: Router = router;
