import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientOverviewComponent } from './Pages/Pacient/overview/pacient-overview.component';
import { PacientCreateComponent } from './Pages/Pacient/create/pacient-create.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PacientOverviewService} from "./Pages/Pacient/overview/pacient-overview.service";
import {Angular2PromiseButtonModule} from 'angular2-promise-buttons/';
import { TextInputComponent } from './Components/Forms/text-input/text-input.component';
import { FileInputComponent } from './Components/Forms/file-input/file-input.component';
import { MenuComponent } from './Components/menu/menu.component';
import { LoginComponent } from './Pages/Login/login/login.component';
import { LogoutComponent } from './Pages/logout/logout.component';
import {HttpInterceptorService} from "./Pages/Login/http-interceptor.service";
import {AuthenticationService} from "./Pages/Login/authentication.service";

@NgModule({
  declarations: [
    AppComponent,
    PacientOverviewComponent,
    PacientCreateComponent,
    TextInputComponent,
    FileInputComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Angular2PromiseButtonModule.forRoot()
  ],
  providers: [
    PacientOverviewService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
