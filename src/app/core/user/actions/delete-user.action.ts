import { Action } from '@ngrx/store';

export const DELETE_USER = '[USER] DELETE_USER';
export const DELETE_USER_SUCCESS = '[USER] DELETE_USER_SUCCESS';
export const DELETE_USER_ERROR = '[USER] DELETE_USER_ERROR';

export class DeleteUserAction implements Action {
  readonly type = DELETE_USER;
  constructor(public payload: any) {}
}

export class DeleteUserActionSuccess implements Action {
  readonly type = DELETE_USER_SUCCESS;
  constructor(public payload?: any) {}
}

export class DeleteUserActionError implements Action {
  readonly type = DELETE_USER_ERROR;
  constructor(public payload?: any) {}
}
