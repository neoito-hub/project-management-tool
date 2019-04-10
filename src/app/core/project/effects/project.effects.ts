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
          //console.log(data);
          //this.router.navigate(['dashboard']);
          return new fromProjectActions.LoadProjectActionSuccess(data);
        }),
        catchError(error => {
          //console.log(error);
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
          //console.log('inside add project effect: Added succesfully');
          return new fromProjectActions.AddProjectSuccess('success');
        }),
        tap(() => {
          this.router.navigate(['/projects']);
        }),
        catchError(error => {
          // console.log(error);
          return of(new fromProjectActions.AddProjectError());
        })
      );
    })
  );

  //Find Prroject effect
  @Effect()
  getprojectResources$ = this.actions.pipe(
    ofType(fromProjectActions.GET_PROJECT_RESOURCES),
    switchMap((action: fromProjectActions.GetProjectResources) => {
      return this.fromProjectServices.getProjectDetail(action.payload).pipe(
        map(data => {
          console.log('inside add project detail effect', data);
          return new fromProjectActions.GetProjectResourcesSuccess(data);
        }),
        catchError(error => {
          console.log(error);
          return of(new fromProjectActions.GetProjectResourcesError());
        })
      );
    })
  );
  //Find Single Item Effect
  @Effect()
  findProject$ = this.actions.pipe(
    ofType(fromProjectActions.FIND_PROJECT),
    switchMap((action: fromProjectActions.FindProject) => {
      return this.fromProjectServices.getProject(action.payload).pipe(
        map(data => {
          //console.log('data in our effect', data);
          return new fromProjectActions.FindProjectSuccess(data);
        }),
        catchError(error => {
          // console.log(error);
          return of(new fromProjectActions.FindProjectError(error));
        })
      );
    })
  );
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
