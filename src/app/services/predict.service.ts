import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserDataService } from './user-data.service';
import { DataModel, Result } from '../data-model/data_model';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PredictService {

  constructor(private http: HttpClient, private userData : UserDataService) { }

  // user-data 
  public records: DataModel[] = [];

  public jsonRecords = JSON.stringify(this.records)



  // fetching predicted results
  public predictDisease(data): Observable<any> {
    console.log("in predict api");
    console.log(data)
    return this.http.post<String>(`/api/predict`, data)
  }
}
