import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import * as fromActions from '../actions';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { UserService } from '../services';

@Injectable()
export class DeleteUserEffect {
  promoData: any;
  constructor(
    private actions: Actions,
    private _resourceService: UserService,
    public store: Store<any>,
    public router: Router
  ) {}

  @Effect()
  deleteUser$ = this.actions.pipe(
    ofType(fromActions.DELETE_USER),
    switchMap((action: fromActions.DeleteUserAction) => {
      return this._resourceService.deleteUser(action.payload).pipe(
        map(data => {
          //console.log('data in our delete effect', data);
          return new fromActions.DeleteUserActionSuccess(data);
        }),
        catchError(error => {
          //console.log(error);
          return of(new fromActions.DeleteUserActionError());
        })
      );
    })
  );
}
