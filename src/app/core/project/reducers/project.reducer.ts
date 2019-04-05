import * as fromProjectActions from '../actions/project.action';
import { Project } from '../models/project.model';

export interface ProjectState {
  projectList: Project[];
  isLoading: boolean;
  error: boolean;
  count: number;
}

export const initialState: ProjectState = {
  projectList: [],
  isLoading: false,
  error: false,
  count: 0
};

export function ProjectReducer(
  state = initialState,
  action: fromProjectActions.ProjectAction
): ProjectState {
  // State interface
  switch (action.type) {
    case fromProjectActions.LOAD_PROJECT: {
      return {
        ...state,
        isLoading: true
      };
    }
    case fromProjectActions.LOAD_PROJECT_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case fromProjectActions.LOAD_PROJECT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }
    case fromProjectActions.ADD_PROJECT: {
      return {
        ...state,
        isLoading: true
      };
    }
    case fromProjectActions.ADD_PROJECT_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case fromProjectActions.ADD_PROJECT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }
    case fromProjectActions.EDIT_PROJECT: {
      return {
        ...state,
        isLoading: true
      };
    }
    case fromProjectActions.EDIT_PROJECT_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case fromProjectActions.EDIT_PROJECT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }
    case fromProjectActions.REMOVE_PROJECT: {
      return {
        ...state,
        isLoading: true
      };
    }
    case fromProjectActions.REMOVE_PROJECT_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case fromProjectActions.REMOVE_PROJECT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }
  }
  // return state;
}
