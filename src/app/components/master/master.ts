import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Roles } from "../roles/roles";
import { Designation } from '../designation/designation';
import { EmpRoles } from "../emp-roles/emp-roles";

@Component({
  selector: 'app-master',
  imports: [CommonModule, Roles, Designation, EmpRoles],
  templateUrl: './master.html',
  styleUrl: './master.css'
})
export class Master {

  currentComponent: string = "Roles";

  changeTab (tabName: string) {
    this.currentComponent = tabName;
  }
}
