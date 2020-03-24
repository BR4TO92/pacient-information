import { Injectable } from '@angular/core';
import {Pacient} from "../pacient";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PacientCreateService {

  constructor(private httpClient: HttpClient) { }

  public save(formData: FormData) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.httpClient.post<Pacient>("http://localhost:8080/pacient", formData, {headers: headers})
      .toPromise();
  }
}
