import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ResourceService {
  constructor(private firestore: AngularFirestore) {}

  getResourceList(): any {
    // console.log('in service');
    const userid = localStorage.getItem('uid');

    return this.firestore
      .collection('resourcesList', ref => {
        console.log(ref, 'reference');
        return ref;
      })
      .valueChanges();
  }
  addResource(payload: any): any {
    // console.log('payload', payload);
    const userid = localStorage.getItem('uid');

    return from(
      this.firestore
        .collection('resourcesList')
        .add(payload)
        .then(
          function(result: any) {
            return result;
          },
          function(err: any) {
            return err;
          }
        )
    );
  }
}
