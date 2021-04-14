import { Component, OnInit } from '@angular/core';

export interface Attributes {
  name: string;
  description: string;
}

const ATTR_DATA: Attributes[] = [
  {name: 'Age', description: 'The age of the individual in years'},
  {name: 'Sex', description: 'Gender (Male or Female)'},
  {name: 'Chest Pain Type', description: 'The type of chest-pain experienced by the individual : Typical Angina, Atypical Angina, Non-Anginal Pain or Asymptomatic'},
  {name: 'Resting Blood Pressure', description: 'The pressure as the heart relaxes'},
  {name: 'Cholestoral (mg/dl)', description: 'Serum Cholestoral show the amount of triglycerides present'},
  {name: 'Fasting Blood Sugar (mg/dl)', description: 'Test to determine amount of glucose in a blood sample after an overnight fast'},
  {name: 'Resting Electrocardiographic Results', description: 'Detect certain heart conditions such as hypertrophy of heart, ischemia, myocardial infarction'},
  {name: 'Thalach', description: 'Maximum heart rate achieved'},
  {name: 'Exercise Induced Angina', description: 'A type of chest pain that results from reduced blood flow to the heart'},
  {name: 'Oldpeak', description: 'ST depression induced by exercise relative to rest'},
  {name: 'Slope', description: 'The slope of the peak exercise ST segment : unsloping, flat or downsloping'},
  {name: 'Number of Major Vessels', description: 'Number of major vessels (0–3) colored by flourosopy'},
  {name: 'Thalassemia', description: 'An inherited blood disorder that causes the body to have less hemoglobin than normal'},
];


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description'];
  dataSource = ATTR_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
