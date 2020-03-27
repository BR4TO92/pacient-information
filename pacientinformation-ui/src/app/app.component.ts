import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "./Pages/Login/login.service";
import {AuthenticationService} from "./Pages/Login/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pacient Information';
  isLoggedIn = false;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedin();
  }
}
