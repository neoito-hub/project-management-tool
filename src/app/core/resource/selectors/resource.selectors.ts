import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromReducer from '../reducers/resource.reducer';
import { ResourceState } from '../reducers/resource.reducer';

export const getResourceState = createFeatureSelector<
  fromReducer.ResourceState
>('resource');

export const getAllResources = createSelector(
  getResourceState,
  fromReducer.getResources
);

export const getAllResourcesLoading = createSelector(
  getResourceState,
  (state: ResourceState) => {
    return state.isLoading;
  }
);
