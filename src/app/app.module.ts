import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { FormComponent } from './form/form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadDialogComponent } from './home/file-upload-dialog/file-upload-dialog.component';
import { PredictComponent } from './predict/predict.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Result } from './data-model/data_model';
import { AboutComponent } from './about/about.component';
import { MatTableModule } from '@angular/material/table';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChartComponent } from './analytics/chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    FileUploadDialogComponent,
    PredictComponent,
    AboutComponent,
    AnalyticsComponent,
    ChartComponent,
    PredictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatRippleModule,
    MatDialogModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    NgxChartsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [Result],
  bootstrap: [AppComponent],
  entryComponents: [
    AnalyticsComponent
  ],

})
export class AppModule { }
