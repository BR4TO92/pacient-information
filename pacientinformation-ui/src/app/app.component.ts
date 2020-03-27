import { Component } from '@angular/core';
import {AuthenticationService} from "./Components/authentication/authentication.service";

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
