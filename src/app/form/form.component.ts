import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataModel } from '../data-model/data_model';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public age: number = null;
  public sex: number = null;
  public cp: number = null;
  public trestbps: number = null;
  public chol: number = null;
  public fbs: number = null;
  public restecg: number = null;
  public thalach: number = null;
  public exang: number = null;
  public oldpeak: number = null;
  public slope: number = null;
  public ca: number = null;
  public thal: number = null;

  public records: DataModel[] = [];

  public error: boolean = false;

  constructor(private userData: UserDataService, private router : Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.age, this.sex, this.cp, this.trestbps,
    this.chol, this.fbs, this.restecg, this. thalach,
    this.exang, this.oldpeak, this.slope,this.ca, this.thal);

    // validating form data
    if (
      this.age == null ||
      this.sex == null ||
      this.cp == null ||
      this.trestbps == null ||
      this.chol == null ||
      this.fbs == null ||
      this.restecg == null ||
      this.thalach == null ||
      this.exang == null ||
      this.oldpeak == null ||
      this.slope == null ||
      this.ca == null ||
      this.thal == null
    ) {
      this.error = true;
    } else {
          // storing data in correct format
        let csvRecord: DataModel = new DataModel();
        csvRecord.age = Number(this.age);
        csvRecord.sex = Number(this.sex);
        csvRecord.cp = Number(this.cp);
        csvRecord.trestbps = Number(this.trestbps);
        csvRecord.chol = Number(this.chol);
        csvRecord.fbs = Number(this.fbs);
        csvRecord.restecg = Number(this.restecg);
        csvRecord.thalach = Number(this.thalach);
        csvRecord.exang = Number(this.exang);
        csvRecord.oldpeak = Number(this.oldpeak);
        csvRecord.slope = Number(this.slope);
        csvRecord.ca = Number(this.ca);
        csvRecord.thal = Number(this.thal);
    
        this.records.push(csvRecord);
        console.log('FORM : The final value is', this.records[0]);
    
        this.userData.changeMessage(this.records);

        this.router.navigate(['/predict'])
    }

    
  }
}
