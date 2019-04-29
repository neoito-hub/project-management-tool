import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { of, Observable, observable } from 'rxjs';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User as FireUser } from 'firebase';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
  user: User;
  fireUser: FireUser;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.fireUser = user;
        localStorage.setItem('user', JSON.stringify(this.fireUser));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  //login status
  public isAuthenticated(): Observable<any> {
    return this.afAuth.authState.pipe(
      map(user => {
        if (user) {
          this.fireUser = user;
          localStorage.setItem('user', JSON.stringify(this.fireUser));
          //console.log('User is authenticated'); //for debug
          return user;
        } else {
          localStorage.setItem('user', null);
          //console.log('User is not authenticated'); //for debug
          return null;
        }
      }),
      catchError(err => of(false))
    );
  }

  //login service with email and password
  getUserData(payload: User): Observable<auth.UserCredential> {
    let email = payload.email;
    let password = payload.password;
    var result = from(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
    );
    //console.log(`Firebase response: ${result}`);
    return result;
  }
  //logout service
  logout(payload: User): Observable<void> {
    var result = from(this.afAuth.auth.signOut());
    //console.log(`Firebase response: ${result}`);
    return result;
  }

  //Register New User
  doRegister(value): Observable<auth.UserCredential> {
    let email = value.email;
    let password = 'password';
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    );
  }
}
