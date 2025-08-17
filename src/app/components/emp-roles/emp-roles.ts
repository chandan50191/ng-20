import { Component, inject, OnInit } from '@angular/core';
import { IResponse, IRole } from '../../model/interface/role';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './emp-roles.html',
  styleUrl: './emp-roles.css'
})
export class EmpRoles implements OnInit {
    // before angular 16 we use Dependency injection in constructor like
  // constructor(private http: HttpClient) {

  // }

  // after Angular 16 i.e 17 onward
  roleList:IRole[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http.get<IResponse<IRole[]>>("http://localhost:3000/api/roles").subscribe((res: IResponse<IRole[]>) => {
      this.roleList = res.data;
    })
  }
}
