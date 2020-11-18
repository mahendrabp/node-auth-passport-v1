import { Router } from 'express';
import { AuthRoutes } from './auth.routes';

const router: Router = Router();

router.use('/', AuthRoutes);

export const RouteNav: Router = router;
