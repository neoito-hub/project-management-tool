import { Action } from '@ngrx/store';
import { Project } from '../models/project.model';

export const LOAD_PROJECT = '[PROJECT] LOAD_PROJECT';
export const LOAD_PROJECT_SUCCESS = '[PROJECT] LOAD_PROJECT_SUCCESS';
export const LOAD_PROJECT_ERROR = '[PROJECT] LOAD_PROJECT_ERROR';

// Load Project
export class LoadProjectAction implements Action {
  readonly type = LOAD_PROJECT;
  constructor(public payload?: any) {}
}
export class LoadProjectActionSuccess implements Action {
  readonly type = LOAD_PROJECT_SUCCESS;
  constructor(public payload: any) {}
}
export class LoadProjectActionError implements Action {
  readonly type = LOAD_PROJECT_ERROR;
  constructor(public payload: any) {}
}
