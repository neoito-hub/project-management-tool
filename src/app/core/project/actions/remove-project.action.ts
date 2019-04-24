import { Action } from '@ngrx/store';

export const REMOVE_PROJECT = '[PROJECT] REMOVE_PROJECT';
export const REMOVE_PROJECT_SUCCESS = '[PROJECT] REMOVE_PROJECT_SUCCESS';
export const REMOVE_PROJECT_ERROR = '[PROJECT] REMOVE_PROJECT_ERROR';

//Remove Project
export class RemoveProjectAction implements Action {
  readonly type = REMOVE_PROJECT;
  constructor(public payload: { id: string }) {}
}
export class RemoveProjectActionSuccess implements Action {
  readonly type = REMOVE_PROJECT_SUCCESS;
  constructor(public payload: { id: string }) {}
}
export class RemoveProjectActionError implements Action {
  readonly type = REMOVE_PROJECT_ERROR;
  constructor(public payload: any) {}
}
