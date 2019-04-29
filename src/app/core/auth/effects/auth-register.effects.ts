import { Injectable } from '@angular/core';
//  ngrx
import { Effect, Actions, ofType } from '@ngrx/effects';

// rxjs
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromAuthActions from '../actions';
import * as fromAuthServices from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffects {
  constructor(
    private actions: Actions,
    private fromAuthServices: fromAuthServices.AuthService,
    private router: Router
  ) {}

  //register effect
  @Effect()
  register$ = this.actions.pipe(
    ofType(fromAuthActions.REGISTER_SUBMIT),
    switchMap((action: fromAuthActions.RegisterSubmit) => {
      return this.fromAuthServices.doRegister(action.payload).pipe(
        map(data => {
          //console.log(data);
          this.router.navigate(['users']);
          return new fromAuthActions.RegisterSuccess(data);
        }),
        catchError(error => {
          console.log(error);
          return of(new fromAuthActions.RegisterFail());
        })
      );
    })
  );
}
