import Morgan from 'koa-morgan';
import { logger } from '../services';

export const morgan = Morgan('combined', {
  stream: {
    write: (message) => logger.http(message),
  },
});
