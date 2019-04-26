import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class UserService {
  constructor(private firestore: AngularFirestore) {}

  getUserList(): any {
    return this.firestore
      .collection('users', ref => {
        return ref;
      })
      .valueChanges();
  }

  addUser(payload: any): any {
    const userRef = this.firestore.collection('users');
    return Observable.create(observer => {
      userRef
        .add(payload)
        .then(res => {
          userRef
            .doc(res.id)
            .update({ userId: res.id })
            .then(() => {
              observer.next({ error: false, userId: res.id });
            })
            .catch(() => {
              observer.next({ error: true });
            });
        })
        .catch(error => {
          observer.next({ error: true });
        });
    });
  }

  getUser(payload: any): Observable<any> {
    return this.firestore
      .collection('users')
      .doc(payload)
      .valueChanges();
  }

  editUser(payload: any): Observable<any> {
    const userRef = this.firestore.collection('users');
    return Observable.create(observer => {
      userRef
        .doc(payload.userId)
        .update(payload)
        .then(res => {
          observer.next({ error: false, responce: res });
        })
        .catch(err => {
          observer.next({ error: true });
        });
    });
  }

  deleteUser(payload: any): Observable<any> {
    const userRef = this.firestore.collection('users');
    return Observable.create(observer => {
      userRef
        .doc(payload.id)
        .delete()
        .then(res => {
          observer.next({ error: false, responce: res });
        })
        .catch(err => {
          observer.next({ error: true });
        });
    });
  }
}
