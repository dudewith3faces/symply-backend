import Router from 'koa-router';
import { AuthController } from '../controllers';
import { passport } from '../middleware';

export default class AuthAPI {
  private readonly router = new Router({ prefix: '/auth' });
  constructor() {
    this.get();
    this.post();
    this.delete();
    this.route();
  }

  public route() {
    return this.router.routes();
  }

  private get() {
    /*
     * @route  api/auth/test
     * @desc   Test auth route
     * */
    this.router.get('/test', AuthController.test);
    this.router.get(
      '/',
      passport.authenticate('jwt', { session: false }),
      AuthController.test,
    );
  }

  private post() {
    this.router.post('/register', AuthController.registration);
    this.router.post('/login', AuthController.login);
    // put post routes here
  }

  private delete() {
    // put delete routes here
  }
}
