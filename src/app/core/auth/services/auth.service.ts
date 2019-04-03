import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { of, Observable, observable } from 'rxjs';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User as FireUser } from 'firebase';

@Injectable()
export class AuthService {
  success = {
    err: false,
    message: 'Logged in successfully'
  };
  error = {
    err: true,
    message: 'Login failed. Check Username and Password'
  };
  user: User;
  fireUser: FireUser;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.user = {
      email: 'lukku@gmail.com',
      password: 'password'
    };
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.fireUser = user;
        localStorage.setItem('user', JSON.stringify(this.fireUser));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  //login service with email and password
  getUserData(payload: User): Observable<auth.UserCredential> {
    let email = payload.email;
    let password = payload.password;
    var result = from(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
    );
    console.log(`Firebase response: ${result}`);
    //this.router.navigate(['admin/list']);
    return result;
  }
  //logout service
  logout(payload: User): Observable<void> {
    var result = from(this.afAuth.auth.signOut());
    console.log(`Firebase response: ${result}`);
    //this.router.navigate(['admin/list']);
    return result;
  }
}
