// ngrx
import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';

// app
import { AuthReducer, AuthState } from '../reducers/auth.reducer';

export const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getCategoryAndResources = createSelector(
  getAuthFeatureState,
  state => {
    return state.data;
  }
);
