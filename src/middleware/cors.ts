import Cors from 'koa2-cors';
import { origin } from '../config/server';

const options: Cors.Options = {
  allowHeaders: ['Content-Type', 'Accept'],
  allowMethods: ['GET', 'POST', 'OPTIONS', 'DELETE'],
  origin,
};

export const cors = Cors(options);
