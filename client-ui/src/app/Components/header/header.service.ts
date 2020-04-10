import { Injectable } from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private httpClient: HttpClient) { }

  retrieveDetails() {
    return this.httpClient.get<User>("http://localhost:8080/user/logged").toPromise();
  }
}
