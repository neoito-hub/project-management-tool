import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask
} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProjectService } from 'src/app/core/project/services';
import { Store } from '@ngrx/store';
import * as Project from '../../../../core/project';
import { randomString } from '../../../../shared/utils';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  name: string;
  date: string;
  title: string;
  projectID: string;
  closeBtnName: string;
  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;
  downloadURL$: Observable<string>;
  docUrl: string;
  file: any;
  project$: Observable<Object>;
  documents: any[] = [];

  constructor(
    private storage: AngularFireStorage,
    public bsModalRef: BsModalRef,
    private db: AngularFirestore,
    private projectService: ProjectService,
    public _store: Store<any>
  ) {
    this.project$ = this._store.select(Project.getDocuments);
    this.project$.subscribe((v: any) => {
      if (v) {
        this.documents = v;
      }
    });
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }
  startUpload(event: any) {
    this.file = event.item(0);
    if (!this.file) {
      console.log('no file choosen');
      return;
    }
  }

  save() {
    // The File object
    // const file = event.item(0);
    // console.log('file ->>>', this.file);
    if (!this.name) {
      alert('Please type a file name before upload');
      return;
    }
    // Client-side validation example
    // if (file.type.split('/')[0] !== 'image') {
    //   console.error('unsupported file type :( ');
    //   return;
    // }

    // The storage path
    const randName = randomString();
    const path = `Documents/${this.projectID}/${randName}_${this.file.name}`;
    // Totally optional metadata
    // const customMetadata = { app: 'My AngularFire-powered PWA!' };
    // console.log('customMetadata', customMetadata);
    // The main task
    this.task = this.storage.upload(path, this.file);
    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    // The file's download URL
    const fileRef = this.storage.ref(path);
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(res => {
            if (res) {
              this.docUrl = res;
              if (this.docUrl && this.name && this.projectID) {
                let obj = {
                  name: this.name,
                  date: this.date,
                  url: this.docUrl,
                  firebasename: path
                };
                this.documents.push(obj);
                this.projectService
                  .addDocuments(this.documents, this.projectID)
                  .subscribe(
                    v => {
                      if (v) {
                        this.bsModalRef.hide();
                      }
                    },
                    error => {
                      console.log('error', error);
                    }
                  );
              }
            }
          });
        })
      )
      .subscribe();
  }
  namechanged(args: any) {
    this.name = args;
  }
  datechanged(args: any) {
    this.date = args;
  }

  // Determines if the upload task is active
  // isActive(snapshot) {
  //   return (
  //     snapshot.state === 'running' &&
  //     snapshot.bytesTransferred < snapshot.totalBytes
  //   );
  // }
}
