import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import * as fromActions from '../actions';

import { Store, Action } from '@ngrx/store';
import { Router } from '@angular/router';

import * as fromSelector from '../selectors';
import { ResourceService } from '../services';

@Injectable()
export class ResourceEffect {
  promoData: any;
  constructor(
    private actions: Actions,
    private _resourceService: ResourceService,
    public store: Store<any>,
    public router: Router
  ) {}

  @Effect()
  loadResources$ = this.actions.pipe(
    ofType(fromActions.LOAD_RESOURCE),
    switchMap((action: fromActions.LoadResourceAction) => {
      return this._resourceService.getResourceList().pipe(
        map(data => {
          return new fromActions.LoadResourceActionSuccess(data);
        }),
        catchError(error => {
          console.log(error);
          return of(new fromActions.LoadResourceActionError());
        })
      );
    })
  );

  @Effect()
  addResource$ = this.actions.pipe(
    ofType(fromActions.ADD_RESOURCE),
    switchMap((action: fromActions.AddResourceAction) => {
      return this._resourceService.addResource(action.payload).pipe(
        map(data => {
          console.log('data in add effect', data);
          return new fromActions.AddResourceActionSuccess(data);
        }),
        tap(() => {
          this.router.navigate(['/resource-list']);
        }),
        catchError(error => {
          console.log(error);
          return of(new fromActions.AddResourceActionError());
        })
      );
    })
  );
}
