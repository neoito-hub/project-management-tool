import { Action } from '@ngrx/store';

export const EDIT_RESOURCE_ALLOCATION = '[PROJECT] EDIT_RESOURCE_ALLOCATION';
export const EDIT_RESOURCE_ALLOCATION_SUCCESS =
  '[PROJECT] EDIT_RESOURCE_ALLOCATION_SUCCESS';
export const EDIT_RESOURCE_ALLOCATION_ERROR =
  '[PROJECT] EDIT_RESOURCE_ALLOCATION_ERROR';

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
