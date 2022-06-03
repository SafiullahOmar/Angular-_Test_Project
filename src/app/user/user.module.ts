import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ListingComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
