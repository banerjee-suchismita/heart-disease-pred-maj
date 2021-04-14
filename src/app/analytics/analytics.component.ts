import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  chartTypes: any[];
  chartType: any="age-target";
  name:any='Age distribution with respect to presence or absence of heart disease';

  constructor(public dialog: MatDialog) {
    this.chartTypes = []
  }

  ngOnInit(): void {
    this.chartTypes = [
      {
        name: "Age distribution with respect to presence or absence of heart disease",
        icon: "analytics",
        type: "age-target",
        heading: "Age vs Target"
      },
      {
        name: "Sex distribution with respect to presence or absence of heart disease",
        icon: "analytics",
        type: "sex-target",
        heading: "Sex vs Target"
      },
      {
        name: "Distribution of The type of chest-pain experienced by the individual with respect to presence or absence of heart disease",
        icon: "analytics",
        type: "cp-target",
        heading: "Chest pain vs Target"
      },
      {
        name: "Fasting Blood Sugar distribution with respect to presence or absence of heart disease",
        icon: "analytics",
        type: "fbs-target",
        heading: "FBS vs Target"
      },
      {
        name: "Distribution of The slope of the peak exercise ST segment with respect to presence or absence of heart disease",
        icon: "analytics",
        type: "slope-target",
        heading : "Slope vs Target"
      }
    ]

this.openDialog();


  }
  renderChart(value: any) {

    this.chartType = value.type;
    this.name=value.name;

  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
    
  }

  close(){
    this.dialog.closeAll()
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogElementsExampleDialog {}
