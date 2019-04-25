import { Action } from '@ngrx/store';

export const ADD_USER = '[USER] ADD_USER';
export const ADD_USER_SUCCESS = '[USER] ADD_USER_SUCCESS';
export const ADD_USER_ERROR = '[USER] ADD_USER_ERROR';

export class AddUserAction implements Action {
  readonly type = ADD_USER;
  constructor(public payload?: any) {}
}

export class AddUserActionSuccess implements Action {
  readonly type = ADD_USER_SUCCESS;
  constructor(public payload?: any) {}
}

export class AddUserActionError implements Action {
  readonly type = ADD_USER_ERROR;
  constructor(public payload?: any) {}
}
