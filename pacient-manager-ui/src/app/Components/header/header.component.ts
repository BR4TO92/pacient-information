import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../authentication/authentication.service";
import {User} from "./user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedUser: User = new User();
  firstName: string;
  lastName: string;
  organisation: string;
  completeUserName: string;
  isLoggedIn = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedin();
    this.fetchLoggedUserDetails();
  }

  private fetchLoggedUserDetails() {
    this.authenticationService.retrieveDetails()
      .then(
        (data: any) => this.loggedUser = data,
      );
    console.log("loggedUser: " + this.loggedUser);
    this.firstName = this.loggedUser.firstName;
    this.lastName = this.loggedUser.lastName;
    this.organisation = this.loggedUser.organisation;
    this.completeUserName = 'Dr. ' + this.firstName + ' ' + this.lastName;
  }

  doLogout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('login');
  }

}
