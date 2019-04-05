import { Action } from '@ngrx/store';

export const LOAD_RESOURCE = '[RESOURCE] LOAD_RESOURCE';
export const LOAD_RESOURCE_SUCCESS = '[RESOURCE] LOAD_RESOURCE_SUCCESS';
export const LOAD_RESOURCE_ERROR = '[RESOURCE] LOAD_RESOURCE_ERROR';

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

export type ResourceAction =
  | LoadResourceAction
  | LoadResourceActionError
  | LoadResourceActionSuccess;
