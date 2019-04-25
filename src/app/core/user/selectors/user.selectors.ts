import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromReducer from '../reducers/user.reducer';
import { UserState } from '../reducers/user.reducer';

export const getUserState = createFeatureSelector<fromReducer.UserState>(
  'user'
);

export const getAllUsers = createSelector(
  getUserState,
  fromReducer.getUsers
);

export const getAllUsersLoading = createSelector(
  getUserState,
  (state: UserState) => {
    return state.isLoading;
  }
);

export const getSelectedUserId = createSelector(
  getUserState,
  fromReducer.getUserId
);

export const getSelectedUsers = createSelector(
  getSelectedUserId,
  getAllUsers,
  (getSelectedUserId: string, getAllUsers: any[]) => {
    //console.log(getSelectedUserId, getAllUsers);
    if (getSelectedUserId && getAllUsers) {
      return getAllUsers.find(
        (data: any) => data.resourceId === getSelectedUserId
      );
    } else {
      return getAllUsers;
    }
  }
);

export const getSelectedUsers1 = createSelector(
  getUserState,
  fromReducer.getUserSelected
);
