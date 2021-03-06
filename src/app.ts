import express from 'express';
import morgan from 'morgan';
import { config as dontenv } from 'dotenv';
import { RouteNav } from './routes';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

//initialization
const app = express();
dontenv();

//settings, will add setting later
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.use('/api/v1', RouteNav);

export default app;
