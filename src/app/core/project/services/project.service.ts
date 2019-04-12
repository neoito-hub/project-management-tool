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
  arr = [];
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

  addDocuments(x, y, z): Observable<any> {
    // console.log('got oitttttttttttttttttttttttt', x, y, z);
    const projectRef = this.afStore.collection('projects');
    let obj = { name: y, url: x };
    this.arr.push(obj);
    // console.log('arrrrrrrrrrrrrrrrrrrrrr', this.arr);
    return Observable.create(observer => {
      //console.log('Edit servive' + JSON.stringify(payload));
      projectRef
        .doc(z)
        .update({ documents: this.arr })
        .then(res => {
          // console.log('nammude res', res);
          observer.next({ error: false, responce: 'Sucess' });
        })
        .catch(err => {
          observer.next({ error: true });
        });
    });
  }
  //To add new resources
  addProjectAllocation(payload: any): Observable<any> {
    const projectResourceRef = this.afStore
      .collection(`projects`)
      .doc(`${payload.projectId}`)
      .collection('resources');
    return Observable.create(observer => {
      projectResourceRef
        .add(payload)
        .then(res => {
          projectResourceRef
            .doc(res.id)
            .update({ id: res.id })
            .then(() => {
              observer.next({ error: false, allocatonId: res.id });
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
  //Edit Project service
  editProjectAllocation(payload: any): Observable<any> {
    const projectResourceRef = this.afStore
      .collection(`projects`)
      .doc(payload.projectId)
      .collection('resources');
    return Observable.create(observer => {
      //console.log('Edit servive' + JSON.stringify(payload));
      projectResourceRef
        .doc(payload.id)
        .update(payload)
        .then(res => {
          observer.next({ error: false, responce: res });
        })
        .catch(err => {
          observer.next({ error: true });
        });
    });
  }
  //Delete Project service
  deleteProjectAllocation(payload: any): Observable<any> {
    const projectResourceRef = this.afStore
      .collection(`projects`)
      .doc(payload.projectId)
      .collection('resources');
    return Observable.create(observer => {
      projectResourceRef
        .doc(payload.id)
        .delete()
        .then(res => {
          observer.next({
            error: false,
            responce: `Resource ${payload.id} deleted successfully`
          });
        })
        .catch(err => {
          observer.next({ error: true });
        });
    });
  }
}
