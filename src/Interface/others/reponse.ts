export interface IResponse<T = undefined> {
  payload: T;
  message: string;
  isError: boolean;
}

export interface IJwtOption {
  expiresIn: number;
  key: string;
}
