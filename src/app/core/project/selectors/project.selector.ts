import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromReducer from '../reducers/project.reducer';
import { ProjectState } from '../reducers/project.reducer';

export const getProjectState = createFeatureSelector<fromReducer.ProjectState>(
  'project'
);

export const getAllProjects = createSelector(
  getProjectState,
  fromReducer.getProjects
);

export const getAllProjectsLoading = createSelector(
  getProjectState,
  (state: ProjectState) => {
    return state.isLoading;
  }
);