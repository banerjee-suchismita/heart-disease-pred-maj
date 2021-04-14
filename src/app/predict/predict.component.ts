import { Component, OnInit } from '@angular/core';
import { DataModel, Result } from '../data-model/data_model';
import { PredictService } from '../services/predict.service';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {

  constructor(private predictService : PredictService, private userData : UserDataService, private result : Result) { }

  public records: DataModel[] = [];
  public request: any = [];
  public res : number;
  predict:number=-1;


  ngOnInit(): void {
    this.records = this.userData.records;
    console.log("FROM PRED : records = ", this.records[0].age)

    // restructuring data for sending the request payload
    this.request =  {
      "age": this.records[0].age, 
      "sex": this.records[0].sex, 
      "cp": this.records[0].cp, 
      "trestbps": this.records[0].trestbps, 
      "chol": this.records[0].chol, 
      "fbs": this.records[0].fbs, 
      "restecg": this.records[0].restecg, 
      "thalach": this.records[0].thalach, 
      "exang": this.records[0].exang, 
      "ca" : this.records[0].ca,
      "oldpeak": this.records[0].oldpeak, 
      "slope": this.records[0].slope, 
      "thal": this.records[0].thal
    }

    this.predictService.predictDisease(this.request).subscribe(
      res => {
        console.log("FROM PREDICT RES : ",res);
        this.res = res;
        this.predict = this.res;
      });

  }

}
