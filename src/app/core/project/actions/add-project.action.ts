import { Action } from '@ngrx/store';
import { Project } from '../models/project.model';

export const ADD_PROJECT = '[PROJECT] ADD_PROJECT ';
export const ADD_PROJECT_SUCCESS = '[PROJECT] ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_ERROR = '[PROJECT] ADD_PROJECT_FAIL';

//Add project
export class AddProject implements Action {
  readonly type = ADD_PROJECT;
  constructor(public payload: Project) {}
}
export class AddProjectSuccess implements Action {
  readonly type = ADD_PROJECT_SUCCESS;
  constructor(public payload: any) {}
}
export class AddProjectError implements Action {
  readonly type = ADD_PROJECT_ERROR;
}
