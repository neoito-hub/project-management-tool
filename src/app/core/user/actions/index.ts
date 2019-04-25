import {
  LoadUserAction,
  LoadUserActionError,
  LoadUserActionSuccess
} from './load-user.action';

import {
  AddUserAction,
  AddUserActionSuccess,
  AddUserActionError
} from './add-user.action';

import {
  FindUserAction,
  FindUserActionSuccess,
  FindUserActionError
} from './find-user.action';

import {
  UpdateUserAction,
  UpdateUserActionSuccess,
  UpdateUserActionError
} from './update-user.action';

import {
  DeleteUserAction,
  DeleteUserActionSuccess,
  DeleteUserActionError
} from './delete-user.action';

// All the ActionTypes of the resource store are exported from the index to be
// used in the reducer and the effects
export * from './add-user.action';
export * from './find-user.action';
export * from './load-user.action';
export * from './update-user.action';
export * from './delete-user.action';

// For a module there are multiple actions handled in the reducer.
// These are of the type as indexed in here as UserAction
export type UserAction =
  | LoadUserAction
  | LoadUserActionError
  | LoadUserActionSuccess
  | AddUserAction
  | AddUserActionSuccess
  | AddUserActionError
  | FindUserAction
  | FindUserActionSuccess
  | FindUserActionError
  | UpdateUserAction
  | UpdateUserActionSuccess
  | UpdateUserActionError
  | DeleteUserAction
  | DeleteUserActionSuccess
  | DeleteUserActionError;
