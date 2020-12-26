import { IJwtOption } from '../Interface';

const { loginTime, loginKey } = process.env;

const jwtLogin: IJwtOption = {
  expiresIn: Number(loginTime) || 6000,
  key: loginKey || 'secret',
};

export { jwtLogin };
