import * as fromProjectActions from '../actions/project.action';
import { Project } from '../models/project.model';

export interface ProjectState {
  projectList: Project[];
  isLoading: boolean;
  error: boolean;
  count: number;
  projectDetail: any[];
}

export const initialState: ProjectState = {
  projectList: [],
  isLoading: false,
  error: false,
  count: 0,
  projectDetail: []
};

export function ProjectReducer(
  state = initialState,
  action: fromProjectActions.ProjectAction
): ProjectState {
  // State interface
  switch (action.type) {
    case fromProjectActions.LOAD_PROJECT: {
      console.log(`inside load acton`);
      return {
        ...state,
        isLoading: true
      };
    }
    case fromProjectActions.LOAD_PROJECT_SUCCESS: {
      console.log(`inside load acton success`);
      return {
        ...state,
        projectList: action.payload,
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

    case fromProjectActions.FIND_PROJECT: {
      return {
        ...state,
        isLoading: true
      };
    }
    case fromProjectActions.FIND_PROJECT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        projectDetail: action.payload
      };
    }
    case fromProjectActions.FIND_PROJECT_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }
  }
}
export const getProjects = (state: ProjectState) => state.projectList;
export const getProjectsIsLoading = (state: ProjectState) => state.isLoading;
export const getProjectsError = (state: ProjectState) => state.error;
export const getProjectDetail = (state: ProjectState) => state.projectDetail;