import { Component, OnInit } from '@angular/core';
import { IClient } from '../services/client.model';
import { ClientService } from '../services/client.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class ClientComponent implements OnInit {
  clients: IClient[] = [];
  clientForm: FormGroup;
  editing: boolean = false;

  constructor(private clientService: ClientService, private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clients = this.clientService.getAll();
  }

  onSubmit() {
    if (this.clientForm.invalid) return;

    const client: IClient = this.clientForm.value;

    if (this.editing) {
      this.clientService.update(client);
      this.editing = false;
    } else {
      this.clientService.add(client);
    }

    this.clientForm.reset({ id: 0 });
    this.loadClients();
  }

  editClient(client: IClient) {
    this.editing = true;
    this.clientForm.patchValue(client);
  }

  deleteClient(id: number) {
    this.clientService.delete(id);
    this.loadClients();
  }
}
