import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

//for login
export const LOGIN_SUBMIT = '[LOGIN] LOGIN';
export const LOGIN_SUCCESS = '[LOGIN] LOGIN_SUCCESS';
export const LOGIN_FAIL = '[LOGIN] LOGIN_ERROR';

//for signout
export const LOGOUT_SUBMIT = '[LOGOUT] LOGOUT';
export const LOGOUT_SUCCESS = '[LOGOUT] LOGOUT_SUCCESS';
export const LOGOUT_FAIL = '[LOGOUT] LOGOUT_ERROR';

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

//for sign out
export class LogoutSubmit implements Action {
  readonly type = LOGOUT_SUBMIT;
  constructor(public payload?: User) {}
}
export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;
  constructor(public payload?: any) {}
}

export class LogoutFail implements Action {
  readonly type = LOGOUT_FAIL;
  constructor(public payload?: any) {}
}

// action type
export type LoginAction =
  | LoginSubmit
  | LoginSuccess
  | LoginFail
  | LogoutSubmit
  | LogoutSuccess
  | LogoutFail;
