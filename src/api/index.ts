import Router from 'koa-router';
import AuthAPI from './auth.api';

export default class Routes {
  private readonly index = new Router({ prefix: '/api' });
  private readonly auth = new AuthAPI().route();

  constructor() {
    this.route();
    this.api();
  }

  public route() {
    return this.index.routes();
  }

  private api() {
    this.index.use(this.auth);
  }
}
