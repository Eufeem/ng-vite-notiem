import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../models/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  urlApi = 'http://localhost:8080/role'

  constructor(private http: HttpClient) { }

  get(): Observable<Role[]> {
    return this.http.get<Role[]>(this.urlApi);
  }
}
