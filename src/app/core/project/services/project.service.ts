import { Injectable } from '@angular/core';
//public afAuth: AngularFireAuth, public router: Routerimport { User } from '../models/user.model';
import { of, Observable, observable } from 'rxjs';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public router: Router,
    public afDatabase: AngularFireDatabase
  ) {}
  loadProjects(): Observable<any> {
    return this.afStore
      .collection('/projects', ref => {
        //console.log(`Firebase response: ${ref}`);
        return ref;
      })
      .valueChanges();
    // console.log(`Firebase response: ${result}`);
  }
  addProject(payload: any): any {
    const projectRef = this.afStore.collection('projects');
    return Observable.create(observer => {
      projectRef
        .add(payload)
        .then(res => {
          projectRef
            .doc(res.id)
            .update({ projectId: res.id })
            .then(() => {
              observer.next({ error: false, projectId: res.id });
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

  getProject(payload: any): Observable<any> {
    return this.afStore
      .collection('projects')
      .doc(payload)
      .valueChanges();
  }

  //Edit Project service
  editProject(payload: any): Observable<any> {
    const projectRef = this.afStore.collection('projects');
    return Observable.create(observer => {
      //console.log('Edit servive' + JSON.stringify(payload));
      projectRef
        .doc(payload.projectId)
        .update(payload)
        .then(res => {
          observer.next({ error: false, responce: res });
        })
        .catch(err => {
          observer.next({ error: true });
        });
    });
  }

  getProjectDetail(payload: any): Observable<any> {
    console.log('payload =>>>>', payload);
    return this.afStore
      .collection('projects')
      .doc(payload)
      .collection('resources')
      .valueChanges();
  }
}
