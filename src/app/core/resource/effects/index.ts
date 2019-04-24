import { AddResourceEffect } from './add-resource.effect';

import { DeleteResourceEffect } from './delete-resource.effect';

import { FindResourceEffect } from './find-resource.effect';

import { LoadResourceEffect } from './load-resource.effect';

import { UpdateResourceEffect } from './update-resource.effect';
export * from './add-resource.effect';
export * from './delete-resource.effect';
export * from './find-resource.effect';
export * from './load-resource.effect';
export * from './update-resource.effect';

export const ResourceEffect = [
  AddResourceEffect,
  DeleteResourceEffect,
  FindResourceEffect,
  LoadResourceEffect,
  UpdateResourceEffect
];

export const effects: any[] = [ResourceEffect];
