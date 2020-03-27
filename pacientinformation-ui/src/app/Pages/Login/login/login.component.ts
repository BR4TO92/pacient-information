import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../login.service";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password : string = '';

  isLoggedin = false;

  error: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.isLoggedin = this.authenticationService.isUserLoggedin();

    if(this.isLoggedin) {
      this.router.navigateByUrl('pacients');
    }
  }

  doLogin() {
    if(this.username !== '' && this.username !== null && this.password !== '' && this.password !== null) {
      this.authenticationService.authenticate(this.username, this.password).subscribe((result)=> {
        console.log(result);
        this.router.navigate(['/pacients']);
      }, () => {
        this.error = 'Either invalid credentials or something went wrong';
      });
    } else {
      this.error = 'Invalid Credentials';
    }
  }

  // listez pacientii -> this.router.navigate(['/']);

}
