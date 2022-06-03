import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import {HttpClientModule} from '@angular/common/http'
import {AdminRoutingModule} from './admin/admin-routing.module'
import{UserRoutingModule} from './user/user-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormvalidationComponent } from './formvalidation/formvalidation.component'
import  {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    AboutComponent,
    AboutCompanyComponent,
    EmployeeListingComponent,
    EmployeeAddComponent,
    FormvalidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminRoutingModule,
    UserRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
