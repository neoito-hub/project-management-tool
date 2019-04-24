import { Action } from '@ngrx/store';

export const FIND_PROJECT = '[PROJECT] FIND_PROJECT';
export const FIND_PROJECT_SUCCESS = '[PROJECT] FIND_PROJECT_SUCCESS';
export const FIND_PROJECT_ERROR = '[PROJECT] FIND_PROJECT_ERROR';

//Find Project
export class FindProject implements Action {
  readonly type = FIND_PROJECT;
  constructor(public payload?: any) {}
}
export class FindProjectSuccess implements Action {
  readonly type = FIND_PROJECT_SUCCESS;
  constructor(public payload: any) {}
}
export class FindProjectError implements Action {
  readonly type = FIND_PROJECT_ERROR;
  constructor(public payload: any) {}
}
