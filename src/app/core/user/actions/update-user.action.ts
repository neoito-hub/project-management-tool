import { Action } from '@ngrx/store';

export const UPDATE_USER = '[USER] UPDATE_USER';
export const UPDATE_USER_SUCCESS = '[USER] UPDATE_USER_SUCCESS';
export const UPDATE_USER_ERROR = '[USER] UPDATE_USER_ERROR';

export class UpdateUserAction implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload?: any) {}
}

export class UpdateUserActionSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateUserActionError implements Action {
  readonly type = UPDATE_USER_ERROR;
  constructor(public payload?: any) {}
}
