import { Action } from '@ngrx/store';

export const ADD_RESOURCE = '[RESOURCE] ADD_RESOURCE';
export const ADD_RESOURCE_SUCCESS = '[RESOURCE] ADD_RESOURCE_SUCCESS';
export const ADD_RESOURCE_ERROR = '[RESOURCE] ADD_RESOURCE_ERROR';

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
