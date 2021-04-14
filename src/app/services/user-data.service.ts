import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DataModel } from '../data-model/data_model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  // user-data (final storage location)
  public records: DataModel[] = [];

  // maintaining user-data
  public subject = new Subject<any>();
  private dataSource = new BehaviorSubject(this.records);
  currentData = this.dataSource.asObservable();

  // observing the value of user-data
  changeMessage(value: DataModel[]) {
    this.dataSource.next(value);
    this.records = value;

    console.log("SERVICE : The final value is", this.records[0])
  }

  constructor() { }
}
