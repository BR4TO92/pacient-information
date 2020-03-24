import { Injectable } from '@angular/core';
import {Pacient} from "../pacient";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PacientCreateService {

  constructor(private httpClient: HttpClient) { }

  public save(pacient: Pacient) {

    return this.httpClient.post<Pacient>('http://localhost:8080/newPacient', pacient);
  }
}
