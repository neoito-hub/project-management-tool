import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.isAuthenticated().pipe(
      map(res => {
        if (!res) {
          this.router.navigate(['login']);
        }
        return !!res;
      })
    );
  }
}
