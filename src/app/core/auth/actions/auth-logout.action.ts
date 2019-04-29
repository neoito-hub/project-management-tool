import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

//for signout
export const LOGOUT_SUBMIT = '[LOGOUT] LOGOUT';
export const LOGOUT_SUCCESS = '[LOGOUT] LOGOUT_SUCCESS';
export const LOGOUT_FAIL = '[LOGOUT] LOGOUT_ERROR';

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
