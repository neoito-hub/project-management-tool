import { Action } from '@ngrx/store';
import { Project } from '../models/project.model';
import { FindResourceActionError } from '../../resource';

export const ADD_PROJECT = '[PROJECT] ADD_PROJECT ';
export const ADD_PROJECT_SUCCESS = '[PROJECT] ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_ERROR = '[PROJECT] ADD_PROJECT_FAIL';

export const EDIT_PROJECT = '[PROJECT] EDIT_PROJECT';
export const EDIT_PROJECT_SUCCESS = '[PROJECT] EDIT_PROJECT_SUCCESS';
export const EDIT_PROJECT_ERROR = '[PROJECT] EDIT_PROJECT_FAIL';

export const LOAD_PROJECT = '[PROJECT] LOAD_PROJECT';
export const LOAD_PROJECT_SUCCESS = '[PROJECT] LOAD_PROJECT_SUCCESS';
export const LOAD_PROJECT_ERROR = '[PROJECT] LOAD_PROJECT_ERROR';

export const REMOVE_PROJECT = '[PROJECT] REMOVE_PROJECT';
export const REMOVE_PROJECT_SUCCESS = '[PROJECT] REMOVE_PROJECT_SUCCESS';
export const REMOVE_PROJECT_ERROR = '[PROJECT] REMOVE_PROJECT_ERROR';

export const DOCUMENT_UPLOAD = '[PROJECT] DOCUMENT_UPLOAD';
export const DOCUMENT_UPLOAD_SUCCESS = '[PROJECT] DOCUMENT_UPLOAD_SUCCESS';
export const DOCUMENT_UPLOAD_ERROR = '[PROJECT] DOCUMENT_UPLOAD_ERROR';

export const FIND_PROJECT = '[PROJECT] FIND_PROJECT';
export const FIND_PROJECT_SUCCESS = '[PROJECT] FIND_PROJECT_SUCCESS';
export const FIND_PROJECT_ERROR = '[PROJECT] FIND_PROJECT_ERROR';

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
//Document uploading
export class DocumentUploadAction implements Action {
  readonly type = DOCUMENT_UPLOAD;
  constructor(public payload: { id: string }) {}
}
export class DocumentUploadActionSuccess implements Action {
  readonly type = DOCUMENT_UPLOAD_SUCCESS;
  constructor(public payload: { id: string }) {}
}
export class DocumentUploadActionError implements Action {
  readonly type = DOCUMENT_UPLOAD_ERROR;
  constructor(public payload: any) {}
}

export class FindProjectAction implements Action {
  readonly type = FIND_PROJECT;
  constructor(public payload: any) {}
}

export class FindProjectActionSuccess implements Action {
  readonly type = FIND_PROJECT_SUCCESS;
  constructor(public payload: any) {}
}

export class FindProjectActionError implements Action {
  readonly type = FIND_PROJECT_ERROR;
  constructor(public payload?: any) {}
}

// action type
export type ProjectAction =
  | LoadProjectAction
  | LoadProjectActionError
  | LoadProjectActionSuccess
  | AddProject
  | AddProjectSuccess
  | AddProjectError
  | EditProject
  | EditProjectError
  | EditProjectSuccess
  | RemoveProjectAction
  | RemoveProjectActionSuccess
  | RemoveProjectActionError
  | DocumentUploadAction
  | DocumentUploadActionSuccess
  | DocumentUploadActionError
  | FindProjectAction
  | FindProjectActionSuccess
  | FindProjectActionError;
