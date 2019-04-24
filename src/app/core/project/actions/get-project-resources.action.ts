import { Action } from '@ngrx/store';

export const GET_PROJECT_RESOURCES = '[PROJECT] GET_PROJECT_RESOURCES';
export const GET_PROJECT_RESOURCES_SUCCESS =
  '[PROJECT] GET_PROJECT_RESOURCES_SUCCESS';
export const GET_PROJECT_RESOURCES_ERROR =
  '[PROJECT] GET_PROJECT_RESOURCES_ERROR';

//Get resource of single project
export class GetProjectResources implements Action {
  readonly type = GET_PROJECT_RESOURCES;
  constructor(public payload: any) {}
}

export class GetProjectResourcesSuccess implements Action {
  readonly type = GET_PROJECT_RESOURCES_SUCCESS;
  constructor(public payload: any) {}
}

export class GetProjectResourcesError implements Action {
  readonly type = GET_PROJECT_RESOURCES_ERROR;
  constructor(public payload?: any) {}
}
