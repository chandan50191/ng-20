import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDesignation, IResponse } from '../model/interface/role';
import { Observable } from 'rxjs';
import { ClientClass } from '../model/class/Client';

@Injectable({
  providedIn: 'root'
})
export class Master {
  constructor(private http: HttpClient) {}

  getDesignations(): Observable<IResponse<IDesignation[]>> {
    return this.http.get<IResponse<IDesignation[]>>("http://localhost:3000/api/designations");
  }

  getAllClients(): Observable<IResponse<ClientClass[]>> {
    return this.http.get<IResponse<ClientClass[]>>("http://localhost:3000/api/clients");
  }
}
