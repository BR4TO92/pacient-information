import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientListComponent } from './pacient-list/pacient-list.component';
import { PacientFormComponent } from './pacient-form/pacient-form.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {PacientServiceService} from "./pacient-service.service";

@NgModule({
  declarations: [
    AppComponent,
    PacientListComponent,
    PacientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PacientServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
