import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import * as fromActions from '../actions';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { UserService } from '../services';

@Injectable()
export class FindUserEffect {
  promoData: any;
  constructor(
    private actions: Actions,
    private _resourceService: UserService,
    public store: Store<any>,
    public router: Router
  ) {}

  @Effect()
  findUser$ = this.actions.pipe(
    ofType(fromActions.FIND_USER),
    switchMap((action: fromActions.FindUserAction) => {
      return this._resourceService.getUser(action.payload).pipe(
        map(data => {
          //console.log('data in our effect', data);
          return new fromActions.FindUserActionSuccess(data);
        }),
        catchError(error => {
          //console.log(error);
          return of(new fromActions.FindUserActionError());
        })
      );
    })
  );
}
