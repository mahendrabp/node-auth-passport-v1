import express from 'express';
import morgan from 'morgan';
import { config as dontenv } from 'dotenv';

//initialization
const app = express();
dontenv();

//settings, will add setting later
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

export default app;
