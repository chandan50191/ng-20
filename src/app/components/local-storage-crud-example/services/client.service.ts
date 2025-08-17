import { Injectable } from '@angular/core';
import { IClient } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private storageKey = 'clients';

  constructor() {
    // Initialize if not present
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }

  private getClientsFromStorage(): IClient[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  private saveClientsToStorage(clients: IClient[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(clients));
  }

  getAll(): IClient[] {
    return this.getClientsFromStorage();
  }

  getById(id: number): IClient | undefined {
    return this.getClientsFromStorage().find(c => c.id === id);
  }

  add(client: IClient): void {
    const clients = this.getClientsFromStorage();
    client.id = new Date().getTime(); // Unique ID
    clients.push(client);
    this.saveClientsToStorage(clients);
  }

  update(client: IClient): void {
    const clients = this.getClientsFromStorage().map(c => c.id === client.id ? client : c);
    this.saveClientsToStorage(clients);
  }

  delete(id: number): void {
    const clients = this.getClientsFromStorage().filter(c => c.id !== id);
    this.saveClientsToStorage(clients);
  }
}
