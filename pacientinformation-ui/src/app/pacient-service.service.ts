import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pacient} from "./pacient";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PacientServiceService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Pacient[]> {

    return this.http.get<Pacient[]>('http://localhost:8080/pacients');
  }

  public save(pacient: Pacient) {

    return this.http.post<Pacient>('http://localhost:8080/newPacient', pacient);
  }
}
