import { Action } from '@ngrx/store';

export const EDIT_PROJECT = '[PROJECT] EDIT_PROJECT';
export const EDIT_PROJECT_SUCCESS = '[PROJECT] EDIT_PROJECT_SUCCESS';
export const EDIT_PROJECT_ERROR = '[PROJECT] EDIT_PROJECT_FAIL';

//Edit Project
export class EditProject implements Action {
  readonly type = EDIT_PROJECT;
  constructor(public payload?: any) {}
}
export class EditProjectSuccess implements Action {
  readonly type = EDIT_PROJECT_SUCCESS;
  constructor(public payload: any) {}
}
export class EditProjectError implements Action {
  readonly type = EDIT_PROJECT_ERROR;
  constructor(public payload: any) {}
}
