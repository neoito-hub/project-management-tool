import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ResourceService {
  promoData: any;
  promoDetails: any;

  constructor(private firestore: AngularFirestore) {}

  getResourceList(): any {
    console.log('in service');
    const userid = localStorage.getItem('uid');

    return this.firestore
      .collection('resourcesList', ref => {
        console.log(ref, 'reference');
        return ref;
      })
      .valueChanges();
  }
}
