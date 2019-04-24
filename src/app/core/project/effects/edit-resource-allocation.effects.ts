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
export class EditResourceAllocationEffects {
  constructor(
    private actions: Actions,
    private fromProjectServices: fromProjectServices.ProjectService,
    private router: Router
  ) {}

  //Edit project resource
  @Effect()
  editProjectAllocation$ = this.actions.pipe(
    ofType(fromProjectActions.EDIT_RESOURCE_ALLOCATION),
    switchMap((action: fromProjectActions.EditResourceAllocationAction) => {
      //console.log('payload in our edit effect', action.payload);
      return this.fromProjectServices
        .editProjectAllocation(action.payload)
        .pipe(
          map(data => {
            return new fromProjectActions.EditResourceAllocationSuccess(data);
          }),
          tap(() => {
            // this.router.navigate([`projects/detail/${action.payload.projectId}`]);
          }),
          catchError(error => {
            // console.log(error);
            return of(
              new fromProjectActions.EditResourceAllocationError(error)
            );
          })
        );
    })
  );
}
