import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
// import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  // Main task 
  // task: AngularFireUploadTask;

  // // Progress monitoring
  // percentage: Observable<number>;

  // snapshot: Observable<any>;

  // // Download URL
  // downloadURL: Observable<string>;

  // // State for dropzone CSS toggling
  // isHovering: boolean;

  // filepath;
  // @Output() filepathtoForm = new EventEmitter();

  // constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  // sendFileName(){
  //   this.filepathtoForm.emit(this.filepath);
  // }
  
  // toggleHover(event: boolean) {
  //   this.isHovering = event;
  // }


  // startUpload(event: FileList) {
  //   // The File object
  //   const file = event.item(0)

  //   // Client-side validation example
  //   if (file.type.split('/')[0] !== 'image') { 
  //     console.error('unsupported file type :( ')
  //     return;
  //   }

  //   // The storage path
  //   const path = `images/${new Date().getTime()}_${file.name}`;

  //   // Totally optional metadata
  //   const customMetadata = { };

  //   // The main task
  //   this.task = this.storage.upload(path, file, { customMetadata })

  //   // Progress monitoring
  //   this.percentage = this.task.percentageChanges();
  //   this.snapshot   = this.task.snapshotChanges().pipe(
  //     tap(snap => {
  //       console.log('SNAP = ', snap);
  //       this.filepath = snap.metadata.fullPath;
  //       this.sendFileName();
  //       if (snap.bytesTransferred === snap.totalBytes) {
  //         // Update firestore on completion
  //         this.db.collection('photos').add( { path, size: snap.totalBytes })
  //       }
  //     })
  //   )


  //   // The file's download URL
  //   // const fileName = file.name;
  //   // const fileRef = this.storage.ref('images/'+fileName);
  //   // this.downloadURL = fileRef.getDownloadURL();
  //   // console.log('dowload url = ', this.downloadURL);
  // }



  // // Determines if the upload task is active
  // isActive(snapshot) {
  //   return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  // }


}