import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import * as fromActions from '../actions';

import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { ResourceService } from '../services';

@Injectable()
export class AddResourceEffect {
  promoData: any;
  constructor(
    private actions: Actions,
    private _resourceService: ResourceService,
    public store: Store<any>,
    public router: Router
  ) {}

  @Effect()
  addResource$ = this.actions.pipe(
    ofType(fromActions.ADD_RESOURCE),
    switchMap((action: fromActions.AddResourceAction) => {
      return this._resourceService.addResource(action.payload).pipe(
        map(data => {
          return new fromActions.AddResourceActionSuccess(data);
        }),
        tap(() => {
          this.router.navigate(['/resources']);
        }),
        catchError(error => {
          return of(new fromActions.AddResourceActionError());
        })
      );
    })
  );
}
