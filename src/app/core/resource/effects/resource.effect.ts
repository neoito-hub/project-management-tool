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
          //console.log(error);
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
          //console.log('data in add effect', data);
          return new fromActions.AddResourceActionSuccess(data);
        }),
        tap(() => {
          this.router.navigate(['/resource-list']);
        }),
        catchError(error => {
          //console.log(error);
          return of(new fromActions.AddResourceActionError());
        })
      );
    })
  );

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
          this.router.navigate(['/resource-list']);
        }),
        catchError(error => {
          //console.log(error);
          return of(new fromActions.UpdateResourceActionError());
        })
      );
    })
  );

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
