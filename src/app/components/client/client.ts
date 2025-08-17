import { Component, inject, OnInit } from '@angular/core';
import { ClientClass } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Master } from '../../services/master';
import { IResponse } from '../../model/interface/role';
import { ClientService } from '../../services/client-service';

@Component({
  selector: 'app-client',
  imports: [FormsModule, CommonModule],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client implements OnInit {

  clientObj: ClientClass = new ClientClass();
  clientList: ClientClass[] = [];

  service = inject(ClientService)

    ngOnInit(): void {
      this.loadClient();
    }

    loadClient() {
      this.service.getAllClients().subscribe({
        next: (res: IResponse<ClientClass[]>) => {
          this.clientList = res.data;
        }, error: error => {
          console.log(" API Error: ", error);
        }
      })
    }

    saveClient() {
    this.service.addOrUpdateClient(this.clientObj).subscribe({
      next: (res: IResponse<ClientClass>) => {
        alert(res.message || 'Client saved');
        this.resetForm();
        this.loadClient();
      },
      error: error => {
        console.log("Save Error: ", error);
      }
    });
  }

  editClient(client: ClientClass) {
    this.clientObj = { ...client }; // Clone the object for editing
  }

  deleteClient(id: number) {
    if (confirm("Are you sure you want to delete this client?")) {
      this.service.deleteClient(id).subscribe({
        next: (res: IResponse<ClientClass>) => {
          alert(res.message || 'Client deleted');
          this.loadClient();
        },
        error: error => {
          console.log("Delete Error: ", error);
        }
      });
    }
  }

  resetForm() {
    this.clientObj = new ClientClass();
  }

}
