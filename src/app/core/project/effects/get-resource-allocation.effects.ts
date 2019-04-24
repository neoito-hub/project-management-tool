import { Injectable } from '@angular/core';
//  ngrx
import { Effect, Actions, ofType } from '@ngrx/effects';

// rxjs
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromProjectActions from '../actions';
import * as fromProjectServices from '../services/project.service';
import { Router } from '@angular/router';

@Injectable()
export class GetResourceAllocationEffects {
  constructor(
    private actions: Actions,
    private fromProjectServices: fromProjectServices.ProjectService,
    private router: Router
  ) {}

  //Get Prroject Resources effect
  @Effect()
  getprojectResources$ = this.actions.pipe(
    ofType(fromProjectActions.GET_PROJECT_RESOURCES),
    switchMap((action: fromProjectActions.GetProjectResources) => {
      return this.fromProjectServices.getProjectDetail(action.payload).pipe(
        map(data => {
          //console.log('inside add project detail effect', data);
          return new fromProjectActions.GetProjectResourcesSuccess(data);
        }),
        catchError(error => {
          console.log(error);
          return of(new fromProjectActions.GetProjectResourcesError());
        })
      );
    })
  );
}
