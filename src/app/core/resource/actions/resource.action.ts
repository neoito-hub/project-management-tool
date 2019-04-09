import { Action } from '@ngrx/store';

export const LOAD_RESOURCE = '[RESOURCE] LOAD_RESOURCE';
export const LOAD_RESOURCE_SUCCESS = '[RESOURCE] LOAD_RESOURCE_SUCCESS';
export const LOAD_RESOURCE_ERROR = '[RESOURCE] LOAD_RESOURCE_ERROR';

export const ADD_RESOURCE = '[RESOURCE] ADD_RESOURCE';
export const ADD_RESOURCE_SUCCESS = '[RESOURCE] ADD_RESOURCE_SUCCESS';
export const ADD_RESOURCE_ERROR = '[RESOURCE] ADD_RESOURCE_ERROR';

export const FIND_RESOURCE = '[RESOURCE] FIND_RESOURCE';
export const FIND_RESOURCE_SUCCESS = '[RESOURCE] FIND_RESOURCE_SUCCESS';
export const FIND_RESOURCE_ERROR = '[RESOURCE] FIND_RESOURCE_ERROR';

export const UPDATE_RESOURCE = '[RESOURCE] UPDATE_RESOURCE';
export const UPDATE_RESOURCE_SUCCESS = '[RESOURCE] UPDATE_RESOURCE_SUCCESS';
export const UPDATE_RESOURCE_ERROR = '[RESOURCE] UPDATE_RESOURCE_ERROR';

export const DELETE_RESOURCE = '[RESOURCE] DELETE_RESOURCE';
export const DELETE_RESOURCE_SUCCESS = '[RESOURCE] DELETE_RESOURCE_SUCCESS';
export const DELETE_RESOURCE_ERROR = '[RESOURCE] DELETE_RESOURCE_ERROR';

export class LoadResourceAction implements Action {
  readonly type = LOAD_RESOURCE;
  constructor(public payload?: any) {}
}

export class LoadResourceActionSuccess implements Action {
  readonly type = LOAD_RESOURCE_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadResourceActionError implements Action {
  readonly type = LOAD_RESOURCE_ERROR;
  constructor(public payload?: any) {}
}

export class AddResourceAction implements Action {
  readonly type = ADD_RESOURCE;
  constructor(public payload?: any) {}
}

export class AddResourceActionSuccess implements Action {
  readonly type = ADD_RESOURCE_SUCCESS;
  constructor(public payload?: any) {}
}

export class AddResourceActionError implements Action {
  readonly type = ADD_RESOURCE_ERROR;
  constructor(public payload?: any) {}
}

export class FindResourceAction implements Action {
  readonly type = FIND_RESOURCE;
  constructor(public payload: any) {}
}

export class FindResourceActionSuccess implements Action {
  readonly type = FIND_RESOURCE_SUCCESS;
  constructor(public payload: any) {}
}

export class FindResourceActionError implements Action {
  readonly type = FIND_RESOURCE_ERROR;
  constructor(public payload?: any) {}
}

export class UpdateResourceAction implements Action {
  readonly type = UPDATE_RESOURCE;
  constructor(public payload?: any) {}
}

export class UpdateResourceActionSuccess implements Action {
  readonly type = UPDATE_RESOURCE_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateResourceActionError implements Action {
  readonly type = UPDATE_RESOURCE_ERROR;
  constructor(public payload?: any) {}
}

export class DeleteResourceAction implements Action {
  readonly type = DELETE_RESOURCE;
  constructor(public payload: any) {}
}

export class DeleteResourceActionSuccess implements Action {
  readonly type = DELETE_RESOURCE_SUCCESS;
  constructor(public payload?: any) {}
}

export class DeleteResourceActionError implements Action {
  readonly type = DELETE_RESOURCE_ERROR;
  constructor(public payload?: any) {}
}

export type ResourceAction =
  | LoadResourceAction
  | LoadResourceActionError
  | LoadResourceActionSuccess
  | AddResourceAction
  | AddResourceActionSuccess
  | AddResourceActionError
  | FindResourceAction
  | FindResourceActionSuccess
  | FindResourceActionError
  | UpdateResourceAction
  | UpdateResourceActionSuccess
  | UpdateResourceActionError
  | DeleteResourceAction
  | DeleteResourceActionSuccess
  | DeleteResourceActionError;
