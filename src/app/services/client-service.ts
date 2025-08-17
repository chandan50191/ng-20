import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientClass } from '../model/class/Client';
import { IResponse } from '../model/interface/role';
import { Observable } from 'rxjs';
import { IEmployee } from '../model/interface/employee';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = "http://localhost:3000/api/clients";
  private employeeUrl = "http://localhost:3000/api/employees"

  constructor(private http: HttpClient) {}

  // Get all clients
  getAllClients(): Observable<IResponse<ClientClass[]>> {
    return this.http.get<IResponse<ClientClass[]>>(this.baseUrl);
  }

  // Get client by ID
  getClientById(id: number): Observable<IResponse<ClientClass>> {
    return this.http.get<IResponse<ClientClass>>(`${this.baseUrl}/${id}`);
  }

  // Add or update client
  addOrUpdateClient(client: ClientClass): Observable<IResponse<ClientClass>> {
    return this.http.post<IResponse<ClientClass>>(this.baseUrl, client,{ headers: { 'Content-Type': 'application/json' }});
  }

  // Delete client
  deleteClient(id: number): Observable<IResponse<ClientClass>> {
    return this.http.delete<IResponse<ClientClass>>(`${this.baseUrl}/${id}`);
  }

    // Get all clients
  getAllEmployees(): Observable<IResponse<IEmployee[]>> {
    return this.http.get<IResponse<IEmployee[]>>(this.employeeUrl);
  }
}
