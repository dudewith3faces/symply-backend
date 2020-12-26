import { BaseContext } from 'koa';

import { IResponse } from '../Interface';
import { BaseError } from '../models';
import { logger } from '../services';

export const setError = async (ctx: BaseContext, next: () => Promise<any>) => {
  try {
    await next();
  } catch (e) {
    ctx.status = 200;
    if (e instanceof BaseError) {
      const { payload, message } = e;

      ctx.body = {
        isError: true,
        message,
        payload,
      } as IResponse;
    } else {
      logger.error(e);
      ctx.body = {
        isError: true,
        message: 'Error Occur. Please contact support',
      } as IResponse;
    }
  }
};
