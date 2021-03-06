import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../header/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  SESSION_KEY = 'auth_user';

  username: String;
  password: String;

  constructor(private http: HttpClient) {}

  retrieveDetails() {
    return this.http.get<User>("http://localhost:8080/user/logged").toPromise();
  }

  authenticate(username: String, password: String) {
    return this.http.get(`http://localhost:8080/auth`, {
      headers: { authorization: this.createBasicAuthToken(username, password) }}).pipe(map((res) => {
      this.username = username;
      this.password = password;
      this.registerInSession(username, password);
    }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password);
  }

  registerInSession(username, password) {
    sessionStorage.setItem(this.SESSION_KEY, username);
  }

  logout() {
    sessionStorage.removeItem(this.SESSION_KEY);
    this.username = null;
    this.password = null;
  }

  isUserLoggedin() {
    let user = sessionStorage.getItem(this.SESSION_KEY);

    if (user === null) {
      return false;
    }

    return true;
  }

  getLoggedinUser() {
    let user = sessionStorage.getItem(this.SESSION_KEY);

    if (user === null) {
      return '';
    }

    return user;
  }
}
