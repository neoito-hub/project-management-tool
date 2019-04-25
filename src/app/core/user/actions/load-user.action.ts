import { Action } from '@ngrx/store';

export const LOAD_USER = '[USER] LOAD_USER';
export const LOAD_USER_SUCCESS = '[USER] LOAD_USER_SUCCESS';
export const LOAD_USER_ERROR = '[USER] LOAD_USER_ERROR';

export class LoadUserAction implements Action {
  readonly type = LOAD_USER;
  constructor(public payload?: any) {}
}

export class LoadUserActionSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadUserActionError implements Action {
  readonly type = LOAD_USER_ERROR;
  constructor(public payload?: any) {}
}
