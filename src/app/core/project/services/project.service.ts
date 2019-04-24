import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

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
        return ref;
      })
      .valueChanges();
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

  editProject(payload: any): Observable<any> {
    const projectRef = this.afStore.collection('projects');
    return Observable.create(observer => {
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
    return this.afStore
      .collection('projects')
      .doc(payload)
      .collection('resources')
      .valueChanges();
  }

  addDocuments(x, y): any {
    const projectRef = this.afStore.collection('projects');
    return Observable.create(observer => {
      projectRef
        .doc(y)
        .update({ documents: x })
        .then(res => {
          observer.next({ error: false, responce: 'Sucess' });
        })
        .catch(err => {
          observer.next({ error: true });
        });
    });
  }
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
  editProjectAllocation(payload: any): Observable<any> {
    const projectResourceRef = this.afStore
      .collection(`projects`)
      .doc(payload.projectId)
      .collection('resources');
    return Observable.create(observer => {
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
