import { IUser } from '../interface';
import { CryptographyService } from '../services';
import { MySQL } from './database';
import { UserStatement } from './statements';

export class UserHandler {
  public static async saveUser({ password, name, email }: IUser) {
    password = await CryptographyService.generateHash(password);
    const newUser = [email, password, name];
    await MySQL.symply.query(UserStatement.insertUser(), [newUser]);

    return;
  }

  public static async findUserByEmail(email: string): Promise<IUser> {
    const [user] = ((await MySQL.symply.query(UserStatement.findUser(), [
      email,
    ])) as any) as IUser[];

    return user;
  }
}
