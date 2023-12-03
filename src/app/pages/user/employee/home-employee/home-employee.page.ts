import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InterviewService } from 'src/app/service/interview/interview-service.service';
import { TechnicalTestService } from 'src/app/service/technical-test/technical-test.service';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.page.html',
  styleUrls: ['./home-employee.page.scss'],
})
export class HomeEmployeePage implements OnInit {

  homeForm: FormGroup;
  lastInterviewsCreated : any[] = [];
  lastInterviewsForResults : any[] = [];
  lastTechnicalResults : any[] = [];

  constructor(private employeeService:EmployeeUserService,
    private interviewsService: InterviewService,
    private technicalTestService: TechnicalTestService,
    private formBuilder: FormBuilder) {
      this.homeForm = this.formBuilder.group({

      })
     }

  ngOnInit() {
    this.loadEmployeeInformation();
  }

  ngDoCheck() {
    this.loadEmployeeInformation();
  }

  loadEmployeeInformation() {
    const user = this.employeeService.getUserSession();
    if(user){
      this.lastInterviewsCreated = this.interviewsService.getLastThreeInterviewsByEmployeeId(user.identification);
      this.lastInterviewsForResults = this.interviewsService.getLastThreeFinishedInterviewsByEmployeeId(user.identification);
      this.lastTechnicalResults = this.technicalTestService.getLatestTechnicalTestsCreatedByEmployeeId(user.identification);
    }
  }

}
