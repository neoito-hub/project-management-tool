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
export class DeleteResourceAllocationEffects {
  constructor(
    private actions: Actions,
    private fromProjectServices: fromProjectServices.ProjectService,
    private router: Router
  ) {}
  //Delete project resource
  @Effect()
  deleteProjectAllocation$ = this.actions.pipe(
    ofType(fromProjectActions.DELETE_RESOURCE_ALLOCATION),
    switchMap((action: fromProjectActions.DeleteResourceAllocationAction) => {
      return this.fromProjectServices
        .deleteProjectAllocation(action.payload)
        .pipe(
          map(data => {
            return new fromProjectActions.DeleteResourceAllocationSuccess(data);
          }),
          tap(() => {
            // this.router.navigate([`projects/detail/${action.payload.projectId}`]);
          }),
          catchError(error => {
            // console.log(error);
            return of(
              new fromProjectActions.DeleteResourceAllocationError(error)
            );
          })
        );
    })
  );
}
