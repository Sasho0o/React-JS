import { Component, OnInit } from '@angular/core';
import { EmployeeData } from '../models/employee-data';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employeeData: EmployeeData[];
  constructor(private ApiService: ApiService) {}

  ngOnInit() {
    this.ApiService.getEmployeeData().subscribe((data) => {
      this.employeeData = data;
    });
  }

  deleteEmployee(employeeId: number) {
    console.log(employeeId);
    this.ApiService.deleteEmployeeById(employeeId).subscribe(
      (response) => {
        console.log('vrushta :', response);
        for (let i = 0; i < this.employeeData.length; ++i) {
          if (this.employeeData[i].id_user_data === employeeId) {
            this.employeeData.splice(i, 1);
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

