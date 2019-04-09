import { Injectable } from '@angular/core';
//  ngrx
import { Effect, Actions, ofType } from '@ngrx/effects';

// rxjs
import {
  map,
  switchMap,
  catchError,
  withLatestFrom,
  tap
} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as fromProjectActions from '../actions/project.action';
import * as fromProjectServices from '../services/project.service';
import { Router } from '@angular/router';

@Injectable()
export class ProjectEffects {
  constructor(
    private actions: Actions,
    private fromProjectServices: fromProjectServices.ProjectService,
    private router: Router
  ) {}

  //List Project Effects
  @Effect()
  loadProjects$ = this.actions.pipe(
    ofType(fromProjectActions.LOAD_PROJECT),
    switchMap((action: fromProjectActions.LoadProjectAction) => {
      return this.fromProjectServices.loadProjects().pipe(
        map(data => {
          console.log(data);
          //this.router.navigate(['dashboard']);
          return new fromProjectActions.LoadProjectActionSuccess(data);
        }),
        catchError(error => {
          console.log(error);
          return of(new fromProjectActions.LoadProjectActionError(error));
        })
      );
    })
  );

  //Add Prroject effect
  @Effect()
  addproject$ = this.actions.pipe(
    ofType(fromProjectActions.ADD_PROJECT),
    switchMap((action: fromProjectActions.AddProject) => {
      return this.fromProjectServices.addProject(action.payload).pipe(
        map(data => {
          console.log('inside add project effect: Added succesfully');
          return new fromProjectActions.AddProjectSuccess('success');
        }),
        tap(() => {
          this.router.navigate(['/projects']);
        }),
        catchError(error => {
          console.log(error);
          return of(new fromProjectActions.AddProjectError());
        })
      );
    })
  );
}
