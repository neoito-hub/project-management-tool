import { Action } from '@ngrx/store';

export const DELETE_RESOURCE_ALLOCATION =
  '[PROJECT] DELETE_RESOURCE_ALLOCATION';
export const DELETE_RESOURCE_ALLOCATION_SUCCESS =
  '[PROJECT] DELETE_RESOURCE_ALLOCATION_SUCCESS';
export const DELETE_RESOURCE_ALLOCATION_ERROR =
  '[PROJECT] DELETE_RESOURCE_ALLOCATION_ERROR';

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
