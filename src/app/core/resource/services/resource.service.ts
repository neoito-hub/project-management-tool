import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ResourceService {
  constructor(private firestore: AngularFirestore) {}

  getResourceList(): any {
    console.log('in service');

    return this.firestore
      .collection('resourcesList', ref => {
        console.log(ref, 'reference');
        return ref;
      })
      .valueChanges();
  }

  addResource(payload: any): any {
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

  getResource(payload: any): Observable<any> {
    // console.log('payload =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', payload);

    return this.firestore
      .collection('resourcesList')
      .doc(payload)
      .valueChanges();
  }

  editResource(payload: any): Observable<any> {
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

  deleteResource(payload: any): Observable<any> {
    console.log('delete meeeeeeeeeeeeeeeeeeeee', payload.id);
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
