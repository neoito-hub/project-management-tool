import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class UserService {
  constructor(private firestore: AngularFirestore) {}

  getUserList(): any {
    console.log('in service');
    return this.firestore
      .collection('users', ref => {
        return ref;
      })
      .valueChanges();
  }

  addUser(payload: any): any {
    const resourceRef = this.firestore.collection('resourcesList');
    return Observable.create(observer => {
      resourceRef
        .add(payload)
        .then(res => {
          resourceRef
            .doc(res.id)
            .update({ resourceId: res.id })
            .then(() => {
              observer.next({ error: false, resourceId: res.id });
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
      .collection('resourcesList')
      .doc(payload)
      .valueChanges();
  }

  editUser(payload: any): Observable<any> {
    const resourceRef = this.firestore.collection('resourcesList');
    return Observable.create(observer => {
      resourceRef
        .doc(payload.id)
        .update(payload.data)
        .then(res => {
          observer.next({ error: false, responce: res });
        })
        .catch(err => {
          observer.next({ error: true });
        });
    });
  }

  deleteUser(payload: any): Observable<any> {
    const resourceRef = this.firestore.collection('resourcesList');
    return Observable.create(observer => {
      resourceRef
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
