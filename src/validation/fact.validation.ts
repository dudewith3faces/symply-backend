import Validator from 'validator';

import { IFact } from '../Interface';
import { BaseError } from '../models';
import { isEmpty } from './isEmpty';

export class FactValidation {
  public static add(body: IFact): void {
    const errors = {} as IFact;

    let { id, text } = body;
    id = !isEmpty(id) ? id : '';
    text = !isEmpty(text) ? text : '';

    if (Validator.isEmpty(id)) errors.id = 'id is empty';

    if (Validator.isEmpty(text)) errors.text = 'text is required';

    if (!isEmpty(errors)) throw new BaseError('Invalid input', errors);

    return;
  }
}
