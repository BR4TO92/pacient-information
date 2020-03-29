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
import { LoginComponent } from './Components/authentication/login/login.component';
import { LogoutComponent } from './Components/authentication/logout/logout.component';
import {AuthenticationService} from "./Components/authentication/authentication.service";
import {HttpInterceptorService} from "./Components/authentication/http-interceptor.service";
import { CheckboxComponent } from './Components/Forms/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientOverviewComponent,
    PacientCreateComponent,
    TextInputComponent,
    FileInputComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent,
    CheckboxComponent
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
