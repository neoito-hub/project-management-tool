import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import * as fromActions from '../actions';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { UserService } from '../services';

import * as fromAuth from '../../auth';

@Injectable()
export class AddUserEffect {
  promoData: any;
  constructor(
    private actions: Actions,
    private _userService: UserService,
    public store: Store<any>,
    public router: Router
  ) {}

  @Effect()
  addUser$ = this.actions.pipe(
    ofType(fromActions.ADD_USER),
    switchMap((action: fromActions.AddUserAction) => {
      return this._userService.addUser(action.payload).pipe(
        map(data => {
          return (
            new fromActions.AddUserActionSuccess(data),
            new fromAuth.RegisterSubmit(action.payload)
          );
        }),
        tap(() => {
          this.router.navigate(['/users']);
        }),
        catchError(error => {
          return of(new fromActions.AddUserActionError());
        })
      );
    })
  );
}
