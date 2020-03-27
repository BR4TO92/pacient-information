import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  /*username = 'javainuse';
  password = '';
  invalidLogin = false;*/

  constructor(private router: Router,
              private loginservice: AuthenticationService) { }

  /*checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
  }*/
}
