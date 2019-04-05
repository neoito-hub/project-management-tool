// ngrx
import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';

// app
import { ProjectReducer, ProjectState } from '../reducers/project.reducer';

export const getProjectFeatureState = createFeatureSelector<ProjectState>(
  'auth'
);

export const getCategoryAndResources = createSelector(
  getProjectFeatureState,
  state => {
    return state.projectList;
  }
);
