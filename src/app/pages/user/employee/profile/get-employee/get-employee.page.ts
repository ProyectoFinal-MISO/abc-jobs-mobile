import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/model/user/employee/employee';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.page.html',
  styleUrls: ['./get-employee.page.scss'],
})
export class GetEmployeePage implements OnInit {

  getEmployeeForm: FormGroup;

  constructor(private employeeService: EmployeeUserService,
    private formBuilder: FormBuilder) { 
      this.getEmployeeForm = this.formBuilder.group({
        email: [''],
        name: [''],
        lastName: [''],
        identificationType: [''],
        identification: [''],
        phoneNumber: [''],
        mobile: [''],
        city: [''],
        state: [''],
        country: [''],
        address: [''],
      });
    }

  ngOnInit() {
    this.loadUserInformation();
  }

  ngDoCheck() {
    this.loadUserInformation();
  }

  loadUserInformation() {
    const user = this.employeeService.getUserSession();
    console.log("LOAD USER: ",user)

    if(user){
      this.getEmployeeForm.patchValue({
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        identificationType: user.identificationType,
        identification: user.identification,
        phoneNumber: user.phone,
        mobile: user.mobile,
        city: user.city,
        state: user.state,
        country: user.country,
        address: user.address
      })
    }
  }

}
