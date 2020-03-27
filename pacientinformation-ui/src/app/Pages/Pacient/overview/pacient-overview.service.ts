import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Pacient} from "../pacient";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PacientOverviewService {

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Pacient[]> {
    let username='user';
    let password='password';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.httpClient.get<Pacient[]>('http://localhost:8080/pacients');
  }
}
