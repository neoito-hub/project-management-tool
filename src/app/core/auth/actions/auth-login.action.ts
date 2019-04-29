import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

//for login
export const LOGIN_SUBMIT = '[LOGIN] LOGIN';
export const LOGIN_SUCCESS = '[LOGIN] LOGIN_SUCCESS';
export const LOGIN_FAIL = '[LOGIN] LOGIN_ERROR';

//For signin
export class LoginSubmit implements Action {
  readonly type = LOGIN_SUBMIT;
  constructor(public payload?: User) {}
}
export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload?: any) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload?: any) {}
}
