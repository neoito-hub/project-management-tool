import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import * as fromActions from '../actions';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { UserService } from '../services';

@Injectable()
export class UpdateUserEffect {
  promoData: any;
  constructor(
    private actions: Actions,
    private _resourceService: UserService,
    public store: Store<any>,
    public router: Router
  ) {}

  @Effect()
  updateUser$ = this.actions.pipe(
    ofType(fromActions.UPDATE_USER),
    switchMap((action: fromActions.UpdateUserAction) => {
      return this._resourceService.editUser(action.payload).pipe(
        map(data => {
          //console.log('data in our edit effect', data);
          return new fromActions.UpdateUserActionSuccess(data);
        }),
        tap(() => {
          this.router.navigate(['/resources']);
        }),
        catchError(error => {
          //console.log(error);
          return of(new fromActions.UpdateUserActionError());
        })
      );
    })
  );
}
