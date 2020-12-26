import { compare, genSalt, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export class CryptographyService {
  public static async generateHash(data: string): Promise<string> {
    const salt = await genSalt(10);

    return await hash(data, salt);
  }

  public static async verifyHash(
    data: string,
    hashString: string,
  ): Promise<boolean> {
    return await compare(data, hashString);
  }

  public static async generateJwt(
    payload: { email: string },
    secret: string,
  ): Promise<string> {
    return sign(payload, secret, { expiresIn: 600000 });
  }
}
