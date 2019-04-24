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
export class EditProjectEffects {
  constructor(
    private actions: Actions,
    private fromProjectServices: fromProjectServices.ProjectService,
    private router: Router
  ) {}

  //Update project effect
  @Effect()
  editProject$ = this.actions.pipe(
    ofType(fromProjectActions.EDIT_PROJECT),
    switchMap((action: fromProjectActions.EditProject) => {
      //console.log('payload in our edit effect', action.payload);
      return this.fromProjectServices.editProject(action.payload).pipe(
        map(data => {
          return new fromProjectActions.EditProjectSuccess(data);
        }),
        tap(() => {
          this.router.navigate(['/projects']);
        }),
        catchError(error => {
          // console.log(error);
          return of(new fromProjectActions.EditProjectError(error));
        })
      );
    })
  );
}
