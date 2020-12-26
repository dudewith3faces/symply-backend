import Router from 'koa-router';
import { FactController } from '../controllers';

export default class FactAPI {
  private readonly router = new Router({ prefix: '/fact' });
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
    this.router.get('/', FactController.get);
  }

  private post() {
    this.router.post('/', FactController.add);
    // put post routes here
  }

  private delete() {
    this.router.delete('/:id', FactController.delete);
    // put delete routes here
  }
}
