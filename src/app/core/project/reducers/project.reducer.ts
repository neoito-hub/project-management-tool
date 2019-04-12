import * as fromProjectActions from '../actions/project.action';
import { Project } from '../models/project.model';

export interface ProjectState {
  projectList: Project[];
  selectedProject: Object;
  isLoading: boolean;
  error: boolean;
  count: number;
  projectResources: any[];
  documents: any[];
  //singleResource: Object;
}

export const initialState: ProjectState = {
  projectList: [],
  selectedProject: {},
  isLoading: false,
  error: false,
  count: 0,
  projectResources: [],
  documents: []
  //singleResource:{}
};

export function ProjectReducer(
  state = initialState,
  action: fromProjectActions.ProjectAction
): ProjectState {
  // State interface
  switch (action.type) {
    case fromProjectActions.LOAD_PROJECT: {
      //console.log(`inside load acton`);
      return {
        ...state,
        isLoading: true
      };
    }
    case fromProjectActions.LOAD_PROJECT_SUCCESS: {
      //console.log(`inside load acton success`);
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
    case fromProjectActions.FIND_PROJECT: {
      return {
        ...state,
        isLoading: true
      };
    }
    case fromProjectActions.FIND_PROJECT_SUCCESS: {
      return {
        ...state,
        selectedProject: action.payload,
        documents: action.payload.documents,
        isLoading: false
      };
    }
    case fromProjectActions.FIND_PROJECT_ERROR: {
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

    case fromProjectActions.GET_PROJECT_RESOURCES: {
      return {
        ...state,
        isLoading: true
      };
    }
    case fromProjectActions.GET_PROJECT_RESOURCES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        projectResources: action.payload
      };
    }
    case fromProjectActions.GET_PROJECT_RESOURCES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }
    //Add REsource Allocation
    case fromProjectActions.ADD_RESOURCE_ALLOCATION: {
      return {
        ...state,
        isLoading: true
      };
    }
    case fromProjectActions.ADD_RESOURCE_ALLOCATION_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case fromProjectActions.ADD_RESOURCE_ALLOCATION_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }
    //Edit REsource Allocation
    case fromProjectActions.EDIT_RESOURCE_ALLOCATION: {
      return {
        ...state,
        isLoading: true
      };
    }
    case fromProjectActions.EDIT_RESOURCE_ALLOCATION_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case fromProjectActions.EDIT_RESOURCE_ALLOCATION_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }
    //Delete REsource Allocation
    case fromProjectActions.DELETE_RESOURCE_ALLOCATION: {
      return {
        ...state,
        isLoading: true
      };
    }
    case fromProjectActions.DELETE_RESOURCE_ALLOCATION_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case fromProjectActions.DELETE_RESOURCE_ALLOCATION_ERROR: {
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
export const getProjectResources = (state: ProjectState) =>
  state.projectResources;
export const getSelectedProject = (state: ProjectState) =>
  state.selectedProject;
export const getProjectDocuments = (state: ProjectState) => state.documents;
