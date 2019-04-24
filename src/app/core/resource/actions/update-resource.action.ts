import { Action } from '@ngrx/store';

export const UPDATE_RESOURCE = '[RESOURCE] UPDATE_RESOURCE';
export const UPDATE_RESOURCE_SUCCESS = '[RESOURCE] UPDATE_RESOURCE_SUCCESS';
export const UPDATE_RESOURCE_ERROR = '[RESOURCE] UPDATE_RESOURCE_ERROR';

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
