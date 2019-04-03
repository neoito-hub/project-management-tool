import * as fromAuthActions from '../actions/auth.action';

export interface AuthState {
  loggedIn: boolean;
  data: any;
}

const initialState: AuthState = {
  loggedIn: false,
  data: []
};

export function AuthReducer(
  state = initialState,
  action: fromAuthActions.LoginAction
): AuthState {
  // State interface
  switch (action.type) {
    case fromAuthActions.LOGIN_SUBMIT: {
      return {
        ...state,
        loggedIn: false,
        data: []
      };
    }
    case fromAuthActions.LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: true,
        data: [{ Message: 'Logged in' }]
      };
    }
    case fromAuthActions.LOGIN_FAIL: {
      return {
        ...state,
        loggedIn: false,
        data: [{ Message: 'Login Failed' }]
      };
    }
    case fromAuthActions.LOGOUT_SUCCESS: {
      return {
        ...state,
        loggedIn: false,
        data: [{ Message: 'Logged out successfully' }]
      };
    }
  }
  // return state;
}
