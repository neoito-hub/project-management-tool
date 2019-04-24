import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import * as fromActions from '../actions';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { ResourceService } from '../services';

@Injectable()
export class DeleteResourceEffect {
  promoData: any;
  constructor(
    private actions: Actions,
    private _resourceService: ResourceService,
    public store: Store<any>,
    public router: Router
  ) {}

  @Effect()
  deleteResource$ = this.actions.pipe(
    ofType(fromActions.DELETE_RESOURCE),
    switchMap((action: fromActions.DeleteResourceAction) => {
      return this._resourceService.deleteResource(action.payload).pipe(
        map(data => {
          //console.log('data in our delete effect', data);
          return new fromActions.DeleteResourceActionSuccess(data);
        }),
        catchError(error => {
          //console.log(error);
          return of(new fromActions.DeleteResourceActionError());
        })
      );
    })
  );
}
