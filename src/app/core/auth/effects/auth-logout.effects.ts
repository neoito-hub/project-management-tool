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
export class LogoutEffects {
  constructor(
    private actions: Actions,
    private fromAuthServices: fromAuthServices.AuthService,
    private router: Router
  ) {}

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
