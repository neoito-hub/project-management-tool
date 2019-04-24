import {
  LoadProjectAction,
  LoadProjectActionError,
  LoadProjectActionSuccess
} from './load-all-projects.action';
import {
  AddProject,
  AddProjectSuccess,
  AddProjectError
} from './add-project.action';
import {
  EditProject,
  EditProjectError,
  EditProjectSuccess
} from './edit-project.action';
import {
  FindProject,
  FindProjectError,
  FindProjectSuccess
} from './find-project.action';
import {
  RemoveProjectAction,
  RemoveProjectActionSuccess,
  RemoveProjectActionError
} from './remove-project.action';
import {
  DocumentUploadAction,
  DocumentUploadActionSuccess,
  DocumentUploadActionError
} from './document-upload.action';
import {
  GetProjectResources,
  GetProjectResourcesSuccess,
  GetProjectResourcesError
} from './get-project-resources.action';
import {
  AddResourceAllocationAction,
  AddResourceAllocationSuccess,
  AddResourceAllocationError
} from './add-project-resource.action';
import {
  EditResourceAllocationAction,
  EditResourceAllocationSuccess,
  EditResourceAllocationError
} from './edit-project-resource.action';
import {
  DeleteResourceAllocationAction,
  DeleteResourceAllocationSuccess,
  DeleteResourceAllocationError
} from './delete-project-resource.action';

// For a module there are multiple actions handled in the reducer.
// These are of the type as indexed in here as ProjectAction
export type ProjectAction =
  | LoadProjectAction
  | LoadProjectActionError
  | LoadProjectActionSuccess
  | AddProject
  | AddProjectSuccess
  | AddProjectError
  | EditProject
  | EditProjectError
  | EditProjectSuccess
  | FindProject
  | FindProjectError
  | FindProjectSuccess
  | RemoveProjectAction
  | RemoveProjectActionSuccess
  | RemoveProjectActionError
  | DocumentUploadAction
  | DocumentUploadActionSuccess
  | DocumentUploadActionError
  | GetProjectResources
  | GetProjectResourcesSuccess
  | GetProjectResourcesError
  | AddResourceAllocationAction
  | AddResourceAllocationSuccess
  | AddResourceAllocationError
  | EditResourceAllocationAction
  | EditResourceAllocationSuccess
  | EditResourceAllocationError
  | DeleteResourceAllocationAction
  | DeleteResourceAllocationSuccess
  | DeleteResourceAllocationError;

// All the ActionTypes of the projects store are exported from the index to be
// used in the reducer and the effects
export * from './load-all-projects.action';
export * from './add-project.action';
export * from './edit-project.action';
export * from './remove-project.action';
export * from './get-project-resources.action';
export * from './add-project-resource.action';
export * from './edit-project-resource.action';
export * from './delete-project-resource.action';
export * from './document-upload.action';
export * from './find-project.action';
