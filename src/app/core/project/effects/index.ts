import { LoadProjectEffects } from './load-project.effects';
import { AddProjectEffects } from './add-project.effects';
import { EditProjectEffects } from './edit-project.effects';
import { FindProjectEffects } from './find-project.effects';
import { GetResourceAllocationEffects } from './get-resource-allocation.effects';
import { AddResourceAllocationEffects } from './add-resource-allocation.effects';
import { EditResourceAllocationEffects } from './edit-resource-allocation.effects';
import { DeleteResourceAllocationEffects } from './deleteresource-allocation.effects';

export * from './load-project.effects';
export * from './add-project.effects';
export * from './edit-project.effects';
export * from './find-project.effects';
export * from './get-resource-allocation.effects';
export * from './add-resource-allocation.effects';
export * from './edit-resource-allocation.effects';
export * from './deleteresource-allocation.effects';

// All the effects can be exported from the index to be used
// in the core module feature effects declaration

export const ProjectEffects = [
  LoadProjectEffects,
  AddProjectEffects,
  EditProjectEffects,
  FindProjectEffects,
  GetResourceAllocationEffects,
  AddResourceAllocationEffects,
  EditResourceAllocationEffects,
  DeleteResourceAllocationEffects
];
