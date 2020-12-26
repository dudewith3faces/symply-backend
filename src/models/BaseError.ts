import { IResponse } from '../interface';

export class BaseError extends Error implements IResponse {
  public payload: any;
  public isError: boolean;
  constructor(message: string, payload?: any) {
    super(message);
    this.payload = payload;
    this.isError = true;
  }
  // public message: string;
}
