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
export class FindProjectEffects {
  constructor(
    private actions: Actions,
    private fromProjectServices: fromProjectServices.ProjectService,
    private router: Router
  ) {}

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
}
