import { Component, OnInit } from '@angular/core';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';

@Component({
  selector: 'app-tab-employee',
  templateUrl: './tab-employee.page.html',
  styleUrls: ['./tab-employee.page.scss'],
})
export class TabEmployeePage implements OnInit {

  employee: any;

  constructor(private employeeService: EmployeeUserService) {
     this.employee = employeeService.getUserSession();
   }

  ngOnInit() {
  }



}
