import Router from 'koa-router';
import FactAPI from './fact.api';

export default class Routes {
  private readonly index = new Router({ prefix: '/api' });
  private readonly fact = new FactAPI().route();

  constructor() {
    this.route();
    this.api();
  }

  public route() {
    return this.index.routes();
  }

  private api() {
    this.index.use(this.fact);
  }
}
