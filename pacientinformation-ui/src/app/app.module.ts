import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientOverviewComponent } from './Pages/Pacient/overview/pacient-overview.component';
import { PacientCreateComponent } from './Pages/Pacient/create/pacient-create.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {PacientService} from "./Pages/Pacient/pacient.service";

@NgModule({
  declarations: [
    AppComponent,
    PacientOverviewComponent,
    PacientCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PacientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
