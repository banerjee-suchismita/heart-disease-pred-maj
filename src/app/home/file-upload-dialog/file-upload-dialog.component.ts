import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { DataModel } from '../../data-model/data_model';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.css'],
})
export class FileUploadDialogComponent implements OnInit {
  public records: DataModel[] = [];
  onDataAdd = new EventEmitter();

  constructor(private _router: Router, private userData : UserDataService) {}

  ngOnInit(): void {}

  @ViewChild('DataModel') DataModel: any;

  // to upload a file
  uploadListener($event: any): void {
    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
        // extract data 
        console.log("CSV : The final value is", this.records[0]);
        //setting the data in the service file
        this.userData.changeMessage(this.records);
        // calling parent funciton to close the dialog
        this.onDataAdd.emit();
        //routing to /predict
        this._router.navigateByUrl('/predict');
      };

      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };  
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }
  }

  // get data
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
      if (curruntRecord.length == headerLength) {  
        let csvRecord: DataModel = new DataModel();  
        csvRecord.age = Number(curruntRecord[0].trim());  
        csvRecord.sex = Number(curruntRecord[1].trim());  
        csvRecord.cp = Number(curruntRecord[2].trim());  
        csvRecord.trestbps = Number(curruntRecord[3].trim());  
        csvRecord.chol = Number(curruntRecord[4].trim());  
        csvRecord.fbs = Number(curruntRecord[5].trim());  
        csvRecord.restecg = Number(curruntRecord[6].trim());  
        csvRecord.thalach = Number(curruntRecord[7].trim());  
        csvRecord.exang = Number(curruntRecord[8].trim());  
        csvRecord.oldpeak = Number(curruntRecord[9].trim());  
        csvRecord.slope = Number(curruntRecord[10].trim());  
        csvRecord.ca = Number(curruntRecord[11].trim());  
        csvRecord.thal = Number(curruntRecord[12].trim()); 
        csvArr.push(csvRecord);  
      }  
    }  
    return csvArr;  
  }  

  // get Headers
  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  

  // to check if it is a valid csv file
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  

  // to reset the file
  fileReset() {  
    this.DataModel.nativeElement.value = "";  
    this.records = [];  
  }  
}
