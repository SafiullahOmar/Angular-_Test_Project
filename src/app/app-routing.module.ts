import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutComponent } from './about/about.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent ,children:[{path:"company",component:AboutCompanyComponent}]},
  {path:"employee",component:EmployeeComponent, children:[
    {path:"",component:EmployeeListingComponent},
    {path:"Edit/:id",component:EmployeeAddComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
