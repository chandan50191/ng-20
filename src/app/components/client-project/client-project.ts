import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientProjectClass } from '../../model/class/ClientProjectClass';
import { AsyncPipe, CommonModule, UpperCasePipe } from '@angular/common';
import { ClientClass } from '../../model/class/Client';
import { ClientService } from '../../services/client-service';
import { IResponse } from '../../model/interface/role';
import { IEmployee } from '../../model/interface/employee';
import { Observable } from 'rxjs';
import { Alert } from "../alert/alert";
import { CustomButton } from "../custom-button/custom-button";

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, CommonModule, UpperCasePipe, AsyncPipe, Alert, CustomButton],
  templateUrl: './client-project.html',
  styleUrl: './client-project.css'
})
export class ClientProject implements OnInit {
  clientObj: ClientClass = new ClientClass();
  clientList: ClientClass[] = [];
  employeeList: IEmployee[] = [];

  // create a signal instance
  firstname = signal("Angular 20");
  //and call it as function
  name = this.firstname();

  changefname () {
    this.firstname.set("react 19")
  }

  // call onservable to hmtl direclty using async pipe
clintList$!: Observable<IResponse<ClientClass[]>>;

  clientProjectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0, Validators.required),
    projectName: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(4)]),
    startDate: new FormControl('', Validators.required),
    expectedEndDate: new FormControl('', Validators.required),
    leadByEmpId: new FormControl(0, Validators.required),
    completedDate: new FormControl(''),
    contactPerson: new FormControl('', Validators.required),
    contactPersonContactNo: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/)
    ]),
    totalEmpWorking: new FormControl(0, [Validators.required, Validators.min(1)]),
    projectCost: new FormControl(0, [Validators.required, Validators.min(0)]),
    projectDetails: new FormControl('', Validators.maxLength(500)),
    contactPersonEmailId: new FormControl('', [Validators.required, Validators.email]),
    clientId: new FormControl(0, Validators.required)
  });

  constructor(private fb: FormBuilder) {}

  service = inject(ClientService)

    ngOnInit(): void {
      this.loadClient();
      this.loadEmployees();

      // call onservable to hmtl direclty using async pipe
      this.clintList$ = this.service.getAllClients();
    }

    loadEmployees() {
      this.service.getAllEmployees().subscribe({
        next: (res: IResponse<IEmployee[]>) => {
          this.employeeList = res.data;
        },
        error: error => {
          console.log("API Error", error);
        }
      })
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

    saveEmployee() {
    this.service.addOrUpdateClient(this.clientObj).subscribe({
      next: (res: IResponse<ClientClass>) => {
        alert(res.message || 'Client saved');
        this.resetForm('Owner');
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

  resetForm(data: string) {
    this.clientProjectForm.reset();
  }

}
