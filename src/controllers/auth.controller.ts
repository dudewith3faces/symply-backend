import { BaseContext } from 'koa';
import { IRegistrationBody, IResponse, ILoginBody } from '../interface';
import { UserValidation } from '../validation';
import { UserHandler } from '../handlers';
import { BaseError } from '../models';
import { CryptographyService } from '../services';

export class AuthController {
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

  public static async registration(ctx: BaseContext): Promise<void> {
    // @ts-ignore: a base response interface should be created
    const { password2, ...others }: IRegistrationBody = ctx.request.body;

    UserValidation.registration({ password2, ...others });

    if ((await UserHandler.findUserByEmail(others.email))?.email)
      throw new BaseError('Email already exist.');

    await UserHandler.saveUser({ ...others });
    ctx.status = 200;
    ctx.body = {} as IResponse;
    return;
  }

  public static async login(ctx: BaseContext): Promise<void> {
    const { email, password }: ILoginBody = ctx.request.body;

    UserValidation.login({ email, password });

    const user = await UserHandler.findUserByEmail(email);

    if (!user?.email) throw new BaseError('Email or password is incorrect');

    if (!CryptographyService.verifyHash(password, user.email))
      throw new BaseError('Email or password is incorrect');

    const token = await CryptographyService.generateJwt({ email }, 'secret');

    ctx.status = 200;
    ctx.body = { payload: { token } } as IResponse;
  }

  public static async dashboard(ctx: BaseContext): Promise<void> {}
}
