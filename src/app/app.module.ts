import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import{LocalStorageModule} from 'angular-2-local-storage';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LocalStorageModule.withConfig({
     prefix:'sample-app',
     storageType:'localStorage'
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
