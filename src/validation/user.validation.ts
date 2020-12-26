import Validator from 'validator';

import { ILoginBody, IRegistrationBody } from '../Interface';
import { BaseError } from '../models';
import { isEmpty } from './isEmpty';

export class UserValidation {
  public static registration(body: IRegistrationBody): void {
    const errors = {} as IRegistrationBody;

    let { email, name, password, password2 } = body;
    name = !isEmpty(name) ? name : '';
    email = !isEmpty(email) ? email : '';
    password = !isEmpty(password) ? password : '';
    password2 = !isEmpty(password2) ? password2 : '';

    if (Validator.isEmpty(name)) errors.name = 'First Name is empty';

    if (Validator.isEmpty(email)) errors.email = 'Email is required';

    if (!Validator.isEmail(email)) errors.email = 'Email is invalid';

    if (Validator.isEmpty(password))
      errors.password = 'Password field is empty';

    if (Validator.isEmpty(password2))
      errors.password2 = 'Password field is empty';

    if (!Validator.isAlphanumeric(password))
      errors.password = 'Password must contain at least a number';

    if (!Validator.isLength(password, { min: 8 }))
      errors.password = 'Password must be at least 8 characters';

    if (!Validator.equals(password, password2))
      errors.password2 = 'Passwords must match';

    if (!isEmpty(errors)) throw new BaseError('Invalid input', errors);

    return;
  }

  public static login(body: ILoginBody): void {
    const errors = {} as ILoginBody;

    let { email, password } = body;
    email = !isEmpty(email) ? email : '';
    password = !isEmpty(password) ? password : '';

    if (!Validator.isEmail(email)) errors.email = 'Email is invalid';

    if (Validator.isEmpty(email)) errors.email = 'Email is required';

    if (Validator.isEmpty(password)) errors.password = 'Password is required';

    if (!isEmpty(errors)) throw new BaseError('Invalid input', errors);

    return;
  }
}
