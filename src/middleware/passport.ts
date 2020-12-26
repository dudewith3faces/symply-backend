import p from 'koa-passport';
import {
  ExtractJwt,
  Strategy as JwtStrategy,
  StrategyOptions,
} from 'passport-jwt';
import { jwtLogin } from '../config';
import { UserHandler } from '../handlers';
import { IUser } from '../interface';

class Passport {
  private readonly auth = p;
  constructor() {
    this.local();
    this.JwtStrategy();
    this.use();
  }

  public local() {
    return this.auth;
  }

  private JwtStrategy(): JwtStrategy {
    const opts: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtLogin.key,
    };

    async function verify(
      jwtPayload: { email: string },
      done: (err: any, user: IUser | false) => void,
    ) {
      const user = await UserHandler.findUserByEmail(jwtPayload.email);
      !user ? done(undefined, false) : done(undefined, user);
    }

    const strategy = new JwtStrategy(opts, verify);

    return strategy;
  }

  private use(): void {
    this.auth.use('jwt', this.JwtStrategy());
  }
}

export const passport = new Passport().local();
