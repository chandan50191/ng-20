import { Component, inject, OnInit } from '@angular/core';
import { Master } from '../../services/master';
import { IDesignation, IResponse } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.html',
  styleUrl: './designation.css'
})
export class Designation implements OnInit {
  designationList: IDesignation[] = [];
  service = inject(Master)

  ngOnInit(): void {
    this.service.getDesignations().subscribe({
      next: (res: IResponse<IDesignation[]>) => {
        this.designationList = res.data;
      }, error: error => {
        console.log(" API Error: ", error);
      }
    })
  }


}
