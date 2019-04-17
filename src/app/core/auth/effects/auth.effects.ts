import { Injectable } from '@angular/core';
//  ngrx
import { Effect, Actions, ofType } from '@ngrx/effects';

// rxjs
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as fromAuthActions from '../actions/auth.action';
import * as fromAuthServices from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions: Actions,
    private fromAuthServices: fromAuthServices.AuthService,
    private router: Router
  ) {}

  //login effect
  @Effect()
  login$ = this.actions.pipe(
    ofType(fromAuthActions.LOGIN_SUBMIT),
    switchMap((action: fromAuthActions.LoginSubmit) => {
      return this.fromAuthServices.getUserData(action.payload).pipe(
        map(data => {
          //console.log(data);
          this.router.navigate(['projects']);
          return new fromAuthActions.LoginSuccess(data);
        }),
        catchError(error => {
          //console.log(error);
          return of(new fromAuthActions.LoginFail());
        })
      );
    })
  );

  //logout effect
  @Effect()
  logout$ = this.actions.pipe(
    ofType(fromAuthActions.LOGOUT_SUBMIT),
    switchMap((action: fromAuthActions.LogoutSubmit) => {
      return this.fromAuthServices.logout(action.payload).pipe(
        map(data => {
          //console.log(data);
          this.router.navigate(['login']);
          return new fromAuthActions.LogoutSuccess(data);
        }),
        catchError(error => {
          //console.log(error);
          return of(new fromAuthActions.LogoutFail());
        })
      );
    })
  );
}
