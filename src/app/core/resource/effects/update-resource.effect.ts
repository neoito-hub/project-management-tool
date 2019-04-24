import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import * as fromActions from '../actions';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { ResourceService } from '../services';

@Injectable()
export class UpdateResourceEffect {
  promoData: any;
  constructor(
    private actions: Actions,
    private _resourceService: ResourceService,
    public store: Store<any>,
    public router: Router
  ) {}

  @Effect()
  updateResource$ = this.actions.pipe(
    ofType(fromActions.UPDATE_RESOURCE),
    switchMap((action: fromActions.UpdateResourceAction) => {
      return this._resourceService.editResource(action.payload).pipe(
        map(data => {
          //console.log('data in our edit effect', data);
          return new fromActions.UpdateResourceActionSuccess(data);
        }),
        tap(() => {
          this.router.navigate(['/resources']);
        }),
        catchError(error => {
          //console.log(error);
          return of(new fromActions.UpdateResourceActionError());
        })
      );
    })
  );
}
