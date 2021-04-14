import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PredictComponent } from './predict/predict.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'user-details', component:FormComponent },
  { path: 'predict', component: PredictComponent },
  { path: 'form', component: FormComponent },
  { path: 'about', component: AboutComponent},
  { path: 'analytics', component: AnalyticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
