import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import * as fromActions from '../actions';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { ResourceService } from '../services';

@Injectable()
export class FindResourceEffect {
  promoData: any;
  constructor(
    private actions: Actions,
    private _resourceService: ResourceService,
    public store: Store<any>,
    public router: Router
  ) {}

  @Effect()
  findResource$ = this.actions.pipe(
    ofType(fromActions.FIND_RESOURCE),
    switchMap((action: fromActions.FindResourceAction) => {
      return this._resourceService.getResource(action.payload).pipe(
        map(data => {
          //console.log('data in our effect', data);
          return new fromActions.FindResourceActionSuccess(data);
        }),
        catchError(error => {
          //console.log(error);
          return of(new fromActions.FindResourceActionError());
        })
      );
    })
  );
}
