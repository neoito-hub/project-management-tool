import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

//for register
export const REGISTER_SUBMIT = '[REGISTER] REGISTER';
export const REGISTER_SUCCESS = '[REGISTER] REGISTER_SUCCESS';
export const REGISTER_FAIL = '[REGISTER] REGISTER_ERROR';

//For register
export class RegisterSubmit implements Action {
  readonly type = REGISTER_SUBMIT;
  constructor(public payload?: any) {}
}
export class RegisterSuccess implements Action {
  readonly type = REGISTER_SUCCESS;
  constructor(public payload?: any) {}
}

export class RegisterFail implements Action {
  readonly type = REGISTER_FAIL;
  constructor(public payload?: any) {}
}
