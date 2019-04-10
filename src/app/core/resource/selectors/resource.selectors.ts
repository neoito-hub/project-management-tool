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

export const getSelectedResourceId = createSelector(
  getResourceState,
  fromReducer.getResourceId
);

export const getSelectedResources = createSelector(
  getSelectedResourceId,
  getAllResources,
  (getSelectedResourceId: string, getAllResources: any[]) => {
    //console.log(getSelectedResourceId, getAllResources);
    if (getSelectedResourceId && getAllResources) {
      return getAllResources.find(
        (data: any) => data.resourceId === getSelectedResourceId
      );
    } else {
      return getAllResources;
    }
  }
);

export const getSelectedResources1 = createSelector(
  getResourceState,
  fromReducer.getResourceSelected
);
