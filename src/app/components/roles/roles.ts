import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IResponse, IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css'
})
export class Roles {

  // Types of data type
  // number | boolean| string | date | object | array | undefinned | null
  
  name: string = "Chandan"
  ngVersion: string = "version 20"
  version: number = 20
  isActive: boolean = true
  currentDate: Date = new Date()
  inputType: string = "radio"
  selectedState: string = ""

  showMessage (message: string) {
    alert(message)
  }
}
