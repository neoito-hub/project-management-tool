import { Action } from '@ngrx/store';
import { Project } from '../models/project.model';
import { FindResourceActionError, AddResourceAction } from '../../resource';

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

export const FIND_PROJECT = '[PROJECT] FIND_PROJECT';
export const FIND_PROJECT_SUCCESS = '[PROJECT] FIND_PROJECT_SUCCESS';
export const FIND_PROJECT_ERROR = '[PROJECT] FIND_PROJECT_ERROR';

export const DOCUMENT_UPLOAD = '[PROJECT] DOCUMENT_UPLOAD';
export const DOCUMENT_UPLOAD_SUCCESS = '[PROJECT] DOCUMENT_UPLOAD_SUCCESS';
export const DOCUMENT_UPLOAD_ERROR = '[PROJECT] DOCUMENT_UPLOAD_ERROR';

export const GET_PROJECT_RESOURCES = '[PROJECT] GET_PROJECT_RESOURCES';
export const GET_PROJECT_RESOURCES_SUCCESS =
  '[PROJECT] GET_PROJECT_RESOURCES_SUCCESS';
export const GET_PROJECT_RESOURCES_ERROR =
  '[PROJECT] GET_PROJECT_RESOURCES_ERROR';

export const ADD_RESOURCE_ALLOCATION = '[PROJECT] ADD_RESOURCE_ALLOCATION';
export const ADD_RESOURCE_ALLOCATION_SUCCESS =
  '[PROJECT] ADD_RESOURCE_ALLOCATION_SUCCESS';
export const ADD_RESOURCE_ALLOCATION_ERROR =
  '[PROJECT] ADD_RESOURCE_ALLOCATION_ERROR';

export const EDIT_RESOURCE_ALLOCATION = '[PROJECT] EDIT_RESOURCE_ALLOCATION';
export const EDIT_RESOURCE_ALLOCATION_SUCCESS =
  '[PROJECT] EDIT_RESOURCE_ALLOCATION_SUCCESS';
export const EDIT_RESOURCE_ALLOCATION_ERROR =
  '[PROJECT] EDIT_RESOURCE_ALLOCATION_ERROR';

export const DELETE_RESOURCE_ALLOCATION =
  '[PROJECT] DELETE_RESOURCE_ALLOCATION';
export const DELETE_RESOURCE_ALLOCATION_SUCCESS =
  '[PROJECT] DELETE_RESOURCE_ALLOCATION_SUCCESS';
export const DELETE_RESOURCE_ALLOCATION_ERROR =
  '[PROJECT] DELETE_RESOURCE_ALLOCATION_ERROR';

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

//Add Resource Allocation
export class AddResourceAllocationAction implements Action {
  readonly type = ADD_RESOURCE_ALLOCATION;
  constructor(public payload: any) {}
}
export class AddResourceAllocationSuccess implements Action {
  readonly type = ADD_RESOURCE_ALLOCATION_SUCCESS;
  constructor(public payload: { id: string }) {}
}
export class AddResourceAllocationError implements Action {
  readonly type = ADD_RESOURCE_ALLOCATION_ERROR;
  constructor(public payload: any) {}
}
//Edit Resource Allocation
export class EditResourceAllocationAction implements Action {
  readonly type = EDIT_RESOURCE_ALLOCATION;
  constructor(public payload: any) {}
}
export class EditResourceAllocationSuccess implements Action {
  readonly type = EDIT_RESOURCE_ALLOCATION_SUCCESS;
  constructor(public payload: any) {}
}
export class EditResourceAllocationError implements Action {
  readonly type = EDIT_RESOURCE_ALLOCATION_ERROR;
  constructor(public payload: any) {}
}
//Delete Resource Allocation
export class DeleteResourceAllocationAction implements Action {
  readonly type = DELETE_RESOURCE_ALLOCATION;
  constructor(public payload: any) {}
}
export class DeleteResourceAllocationSuccess implements Action {
  readonly type = DELETE_RESOURCE_ALLOCATION_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteResourceAllocationError implements Action {
  readonly type = DELETE_RESOURCE_ALLOCATION_ERROR;
  constructor(public payload: any) {}
}
//Get single resource of single project
export class GetProjectResources implements Action {
  readonly type = GET_PROJECT_RESOURCES;
  constructor(public payload: any) {}
}

export class GetProjectResourcesSuccess implements Action {
  readonly type = GET_PROJECT_RESOURCES_SUCCESS;
  constructor(public payload: any) {}
}

export class GetProjectResourcesError implements Action {
  readonly type = GET_PROJECT_RESOURCES_ERROR;
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
  | FindProject
  | FindProjectError
  | FindProjectSuccess
  | RemoveProjectAction
  | RemoveProjectActionSuccess
  | RemoveProjectActionError
  | DocumentUploadAction
  | DocumentUploadActionSuccess
  | DocumentUploadActionError
  | GetProjectResources
  | GetProjectResourcesSuccess
  | GetProjectResourcesError
  | AddResourceAllocationAction
  | AddResourceAllocationSuccess
  | AddResourceAllocationError
  | EditResourceAllocationAction
  | EditResourceAllocationSuccess
  | EditResourceAllocationError
  | DeleteResourceAllocationAction
  | DeleteResourceAllocationSuccess
  | DeleteResourceAllocationError;
