import { Injectable } from '@angular/core';
//  ngrx
import { Effect, Actions, ofType } from '@ngrx/effects';

// rxjs
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromAuthActions from '../actions';
import { AuthService as fromAuthServices } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
  constructor(
    private actions: Actions,
    private fromAuthServices: fromAuthServices,
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
          alert(error.message);
          return of(new fromAuthActions.LoginFail());
        })
      );
    })
  );
}
