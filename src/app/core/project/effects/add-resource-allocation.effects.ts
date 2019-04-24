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
export class AddResourceAllocationEffects {
  constructor(
    private actions: Actions,
    private fromProjectServices: fromProjectServices.ProjectService,
    private router: Router
  ) {}
  //Add Project Resources effect
  @Effect()
  addprojectResources$ = this.actions.pipe(
    ofType(fromProjectActions.ADD_RESOURCE_ALLOCATION),
    switchMap((action: fromProjectActions.AddResourceAllocationAction) => {
      return this.fromProjectServices.addProjectAllocation(action.payload).pipe(
        map(data => {
          return new fromProjectActions.AddResourceAllocationSuccess(data);
        }),
        catchError(error => {
          console.log(error);
          return of(new fromProjectActions.AddResourceAllocationError(error));
        })
      );
    })
  );
}
