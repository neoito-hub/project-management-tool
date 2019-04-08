import { Action } from '@ngrx/store';

export const LOAD_RESOURCE = '[RESOURCE] LOAD_RESOURCE';
export const LOAD_RESOURCE_SUCCESS = '[RESOURCE] LOAD_RESOURCE_SUCCESS';
export const LOAD_RESOURCE_ERROR = '[RESOURCE] LOAD_RESOURCE_ERROR';

export const ADD_RESOURCE = '[RESOURCE] ADD_RESOURCE';
export const ADD_RESOURCE_SUCCESS = '[RESOURCE] ADD_RESOURCE_SUCCESS';
export const ADD_RESOURCE_ERROR = '[RESOURCE] ADD_RESOURCE_ERROR';

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

export type ResourceAction =
  | LoadResourceAction
  | LoadResourceActionError
  | LoadResourceActionSuccess
  | AddResourceAction
  | AddResourceActionSuccess
  | AddResourceActionError;
