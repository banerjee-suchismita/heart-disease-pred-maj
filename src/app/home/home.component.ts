import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog() {
    const dialog_ref = this.dialog.open(FileUploadDialogComponent);
    dialog_ref.componentInstance.onDataAdd.subscribe(() => {
      this.dialog.closeAll();
    });
  }

  closeDialog(){
    this.dialog.closeAll();
  }


}
