import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import * as fromActions from '../actions';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { UserService } from '../services';

@Injectable()
export class LoadUserEffect {
  promoData: any;
  constructor(
    private actions: Actions,
    private _userService: UserService,
    public store: Store<any>,
    public router: Router
  ) {}

  @Effect()
  loadUsers$ = this.actions.pipe(
    ofType(fromActions.LOAD_USER),
    switchMap((action: fromActions.LoadUserAction) => {
      return this._userService.getUserList().pipe(
        map(data => {
          return new fromActions.LoadUserActionSuccess(data);
        }),
        catchError(error => {
          console.log(error);
          return of(new fromActions.LoadUserActionError());
        })
      );
    })
  );
}
