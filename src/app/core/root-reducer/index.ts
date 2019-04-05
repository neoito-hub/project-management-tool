import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import {
  Params,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  RouterState
} from '@angular/router';

import * as fromAuthReducer from '../auth/reducers/auth.reducer';
import * as resourceReducer from '../resource/reducers/resource.reducer';
import { resource } from 'selenium-webdriver/http';

// export interface RouterStateUrl {
//   url: string;
//   queryParams: Params;
//   params: Params;
// }

export interface RootState {
  // router: fromRouter.RouterReducerState<RouterStateUrl>;
  loginStatus: fromAuthReducer.AuthState;
  resource: resourceReducer.ResourceState;
}

export const reducers: ActionReducerMap<RootState> = {
  // router: routerReducer,
  loginStatus: fromAuthReducer.AuthReducer,
  resource: resourceReducer.reducer
};
