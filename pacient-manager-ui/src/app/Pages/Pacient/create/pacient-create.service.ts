import { Injectable } from '@angular/core';
import {Pacient} from "../pacient";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../../Components/authentication/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class PacientCreateService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthenticationService) { }

  public save(formData: FormData) {
    var headers = new HttpHeaders(
      {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Basic ${window.btoa(this.authService.username + ":" + this.authService.password)}`,
        'Access-Control-Allow-Headers': `Content-Type`,
        'Access-Control-Allow-Methods': `POST`,
        'Access-Control-Allow-Origin': `*`
      }
    );

    return this.httpClient.post<Pacient>("http://localhost:8080/api/pacients", formData, {headers: headers})
      .toPromise();
  }

  public saveWithoutFile(pacient: Pacient) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.post<Pacient>("/api/pacients/newPacient", pacient, {headers: headers})
      .toPromise();
  }
}
