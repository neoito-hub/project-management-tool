import {
  LoadResourceAction,
  LoadResourceActionError,
  LoadResourceActionSuccess
} from './load-resource.action';

import {
  AddResourceAction,
  AddResourceActionSuccess,
  AddResourceActionError
} from './add-resource.action';

import {
  FindResourceAction,
  FindResourceActionSuccess,
  FindResourceActionError
} from './find-resource.action';

import {
  UpdateResourceAction,
  UpdateResourceActionSuccess,
  UpdateResourceActionError
} from './update-resource.action';

import {
  DeleteResourceAction,
  DeleteResourceActionSuccess,
  DeleteResourceActionError
} from './delete-resource.action';

// All the ActionTypes of the resource store are exported from the index to be
// used in the reducer and the effects
export * from './add-resource.action';
export * from './find-resource.action';
export * from './load-resource.action';
export * from './update-resource.action';
export * from './delete-resource.action';

// For a module there are multiple actions handled in the reducer.
// These are of the type as indexed in here as ResourceAction
export type ResourceAction =
  | LoadResourceAction
  | LoadResourceActionError
  | LoadResourceActionSuccess
  | AddResourceAction
  | AddResourceActionSuccess
  | AddResourceActionError
  | FindResourceAction
  | FindResourceActionSuccess
  | FindResourceActionError
  | UpdateResourceAction
  | UpdateResourceActionSuccess
  | UpdateResourceActionError
  | DeleteResourceAction
  | DeleteResourceActionSuccess
  | DeleteResourceActionError;
