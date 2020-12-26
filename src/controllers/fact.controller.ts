import { BaseContext } from 'koa';
import { FactHandler } from '../handlers';
import { IFact, IResponse } from '../interface';
import { FactValidation } from '../validation';

export class FactController {
  /**
   * FIXME: remove test route once other routes are added.
   * test with mocha, and chai
   */
  public static test(ctx: BaseContext) {
    const res = {} as IResponse;

    res.message = 'auth test route work';

    ctx.status = 200;
    ctx.body = res;
  }

  public static async add(ctx: BaseContext): Promise<void> {
    // @ts-ignore: a base response interface should be created
    const body: IFact = ctx.request.body;
    console.log(body);

    FactValidation.add(body);

    if ((await FactHandler.findFact(body.id))?.id) {
      ctx.status = 200;
      ctx.body = {} as IResponse;
    }

    await FactHandler.save(body);
    ctx.status = 200;
    ctx.body = {} as IResponse;
    return;
  }

  public static async get(ctx: BaseContext): Promise<void> {
    const payload = await FactHandler.getFacts();

    ctx.status = 200;
    ctx.body = { payload } as IResponse;
  }

  public static async delete(ctx: BaseContext) {
    // @ts-ignore: a base response interface should be created
    const { id }: { id: string } = ctx.params;
    await FactHandler.deleteFact(id);
    ctx.status = 200;
    ctx.body = {} as IResponse;
  }
}
