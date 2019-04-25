import * as fromActions from '../actions';

export interface UserState {
  isLoading: boolean;
  userlist: any[];
  error: boolean;
  selectedUserId: string;
  selectedUser: any[];
}

export const initialState: UserState = {
  userlist: [],
  isLoading: false,
  error: false,
  selectedUserId: '',
  selectedUser: []
};

export function reducer(
  state = initialState,
  action: fromActions.UserAction
): UserState {
  switch (action.type) {
    case fromActions.LOAD_USER: {
      return {
        ...state,
        isLoading: true
      };
    }
    case fromActions.DELETE_USER_ERROR:
    case fromActions.UPDATE_USER_ERROR:
    case fromActions.FIND_USER_ERROR:
    case fromActions.ADD_USER_ERROR:
    case fromActions.LOAD_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }
    case fromActions.FIND_USER_SUCCESS: {
      return {
        ...state,
        selectedUser: action.payload,
        isLoading: false
      };
    }
    case fromActions.LOAD_USER_SUCCESS: {
      return {
        ...state,
        userlist: action.payload,
        isLoading: false
      };
    }
    default: {
      return { ...state };
    }
  }
}

export const getUsers = (state: UserState) => state.userlist;
export const getUserIsLoading = (state: UserState) => state.isLoading;
export const getUserError = (state: UserState) => state.error;
export const getUserId = (state: UserState) => state.selectedUserId;
export const getUserSelected = (state: UserState) => state.selectedUser;
