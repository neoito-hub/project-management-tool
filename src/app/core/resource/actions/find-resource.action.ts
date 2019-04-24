import { Action } from '@ngrx/store';

export const FIND_RESOURCE = '[RESOURCE] FIND_RESOURCE';
export const FIND_RESOURCE_SUCCESS = '[RESOURCE] FIND_RESOURCE_SUCCESS';
export const FIND_RESOURCE_ERROR = '[RESOURCE] FIND_RESOURCE_ERROR';

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
