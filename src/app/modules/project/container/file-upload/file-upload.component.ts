import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask
} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
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

  constructor(private storage: AngularFireStorage) {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);
    console.log('file ->>>', file);
    // Client-side validation example
    // if (file.type.split('/')[0] !== 'image') {
    //   console.error('unsupported file type :( ');
    //   return;
    // }

    // The storage path
    const path = `${file.name}`;
    console.log('path', path);
    // Totally optional metadata
    // const customMetadata = { app: 'My AngularFire-powered PWA!' };
    // console.log('customMetadata', customMetadata);
    // The main task
    this.task = this.storage.upload(path, file);
    console.log('task', this.task);
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    console.log('percentage', this.percentage);
    this.snapshot = this.task.snapshotChanges();
    console.log('snapshot ->>>', this.snapshot);
    // The file's download URL
    const fileRef = this.storage.ref(path);
    this.task
      .snapshotChanges()
      .pipe(finalize(() => (this.downloadURL = fileRef.getDownloadURL())))
      .subscribe();

    // this.downloadURL$ = fileRef.getDownloadURL();
    // this.downloadURL$ = this.task.downloadURL();
    // this.downloadURL$.subscribe((v: any) => {
    //   if (v) {
    //     console.log('vvv', v);
    //   }
    // });
    console.log('downloadURL ->>>', this.downloadURL);
  }

  // Determines if the upload task is active
  // isActive(snapshot) {
  //   return (
  //     snapshot.state === 'running' &&
  //     snapshot.bytesTransferred < snapshot.totalBytes
  //   );
  // }
}
