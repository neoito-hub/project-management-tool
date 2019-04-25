import { Action } from '@ngrx/store';

export const FIND_USER = '[USER] FIND_USER';
export const FIND_USER_SUCCESS = '[USER] FIND_USER_SUCCESS';
export const FIND_USER_ERROR = '[USER] FIND_USER_ERROR';

export class FindUserAction implements Action {
  readonly type = FIND_USER;
  constructor(public payload: any) {}
}

export class FindUserActionSuccess implements Action {
  readonly type = FIND_USER_SUCCESS;
  constructor(public payload: any) {}
}

export class FindUserActionError implements Action {
  readonly type = FIND_USER_ERROR;
  constructor(public payload?: any) {}
}
