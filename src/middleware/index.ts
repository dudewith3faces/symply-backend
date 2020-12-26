import compose from 'koa-compose';
import { bodyParser } from './bodyParser';
import { cors } from './cors';
import { helmet } from './helmet';
import { morgan } from './morgan';
import { setError } from './setError';

export { app } from './koa';
export * from './passport';

export const allMiddleware = compose([
  cors,
  bodyParser,
  helmet,
  morgan,
  setError,
]);
