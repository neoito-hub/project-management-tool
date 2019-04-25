import { AddUserEffect } from './add-user.effect';

import { DeleteUserEffect } from './delete-user.effect';

import { FindUserEffect } from './find-user.effect';

import { LoadUserEffect } from './load-user.effect';

import { UpdateUserEffect } from './update-user.effect';
export * from './add-user.effect';
export * from './delete-user.effect';
export * from './find-user.effect';
export * from './load-user.effect';
export * from './update-user.effect';

// All the effects can be exported from the index to be used
// in the core module feature effects declaration
export const UserEffect = [
  AddUserEffect,
  DeleteUserEffect,
  FindUserEffect,
  LoadUserEffect,
  UpdateUserEffect
];

export const effects: any[] = [UserEffect];
