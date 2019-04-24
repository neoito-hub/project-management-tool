import { Action } from '@ngrx/store';

export const DELETE_RESOURCE = '[RESOURCE] DELETE_RESOURCE';
export const DELETE_RESOURCE_SUCCESS = '[RESOURCE] DELETE_RESOURCE_SUCCESS';
export const DELETE_RESOURCE_ERROR = '[RESOURCE] DELETE_RESOURCE_ERROR';

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
