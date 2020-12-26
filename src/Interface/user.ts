export interface IUser {
  password: string;
  name: string;
  email: string;
}

export interface IRegistrationBody {
  email: string;
  password: string;
  password2: string;
  name: string;
}

export interface ILoginBody {
  email: string;
  password: string;
}
