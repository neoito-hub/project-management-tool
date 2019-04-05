import * as fromActions from '../actions';

export interface ResourceState {
  isLoading: boolean;
  resourcelist: any[];
  error: boolean;
}

export const initialState: ResourceState = {
  resourcelist: [],
  isLoading: false,
  error: false
};

export function reducer(
  state = initialState,
  action: fromActions.ResourceAction
): ResourceState {
  switch (action.type) {
    case fromActions.LOAD_RESOURCE: {
      return {
        ...state,
        isLoading: true
      };
    }

    case fromActions.LOAD_RESOURCE_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }

    case fromActions.LOAD_RESOURCE_SUCCESS: {
      return {
        ...state,
        resourcelist: action.payload,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
}

export const getResources = (state: ResourceState) => state.resourcelist;
export const getResourceIsLoading = (state: ResourceState) => state.isLoading;
export const getResourceError = (state: ResourceState) => state.error;
