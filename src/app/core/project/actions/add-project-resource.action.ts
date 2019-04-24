import { Action } from '@ngrx/store';

export const ADD_RESOURCE_ALLOCATION = '[PROJECT] ADD_RESOURCE_ALLOCATION';
export const ADD_RESOURCE_ALLOCATION_SUCCESS =
  '[PROJECT] ADD_RESOURCE_ALLOCATION_SUCCESS';
export const ADD_RESOURCE_ALLOCATION_ERROR =
  '[PROJECT] ADD_RESOURCE_ALLOCATION_ERROR';

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
