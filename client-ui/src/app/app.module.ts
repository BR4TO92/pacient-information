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
import { LoginComponent } from './Components/authentication/login/login.component';
import { LogoutComponent } from './Components/authentication/logout/logout.component';
import {AuthenticationService} from "./Components/authentication/authentication.service";
import {HttpInterceptorService} from "./Components/authentication/http-interceptor.service";
import { CheckboxSingleValueComponent } from './Components/Forms/checkbox-single-value/checkbox-single-value.component';
import { CheckboxComponent } from './Components/Forms/checkbox/checkbox.component';
import { DropdownSelectorComponent } from './Components/Forms/dropdown-selector/dropdown-selector.component';
import {HeaderComponent} from "./Components/header/header.component";
import { BackButtonComponent } from './Components/back-button/back-button.component';
import { DatePickerComponent } from './Components/Forms/date-picker/date-picker.component';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OwlMomentDateTimeModule} from "ng-pick-datetime-moment";
import { SearchInputComponent } from './Components/Forms/search-input/search-input.component';
import { FilterPipe } from './Components/Forms/search-input/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PacientOverviewComponent,
    PacientCreateComponent,
    TextInputComponent,
    FileInputComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    CheckboxSingleValueComponent,
    CheckboxComponent,
    DropdownSelectorComponent,
    BackButtonComponent,
    DatePickerComponent,
    SearchInputComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Angular2PromiseButtonModule.forRoot(),
    OwlDateTimeModule,
    BrowserAnimationsModule,
    OwlMomentDateTimeModule
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
