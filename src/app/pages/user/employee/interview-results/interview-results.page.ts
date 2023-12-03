import { Component, OnInit } from '@angular/core';
import { CreateResultInterviewPage } from '../component/create-result-interview/create-result-interview.page';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';
import { InterviewService } from 'src/app/service/interview/interview-service.service';
import { ModalController } from '@ionic/angular';
import { TestStatus } from 'src/app/model/test-status';

@Component({
  selector: 'app-interview-results',
  templateUrl: './interview-results.page.html',
  styleUrls: ['./interview-results.page.scss'],
})
export class InterviewResultsPage implements OnInit {

  interviewResultEmployeeForm: FormGroup;
  interviewList: Array<any> = [];
  interviewsWithResults: Array<any> = [];

  constructor(private employeeService: EmployeeUserService, 
    private interviewService: InterviewService,
    private formBuilder: FormBuilder,
    private modalController: ModalController) { 
      this.interviewResultEmployeeForm = this.formBuilder.group({
        interviewList: [''],
      });
    }

  ngOnInit() {
    this.loadInterviewInformation();
  }

  ngDoCheck() {
    this.loadInterviewInformation();
  }

  loadInterviewInformation() {
    const user = this.employeeService.getUserSession();
    if(user){
      this.interviewList = this.interviewService.getInterviewsByEmployeeIdForTest(user.identification);
      this.interviewsWithResults = this.interviewService.getInterviewsWithResultsByEmployeeUserId(user.identification);
    }
  }

  async openCreateResultInterviewModal(interview: any) {
    const modal = await this.modalController.create({
      component: CreateResultInterviewPage,
      backdropDismiss: false,
      animated: true,
      presentingElement: await this.modalController.getTop(),
      mode: 'ios',
    });
  
    modal.onDidDismiss().then((data) => {
      if (data.role === 'created' && data.data) {
        const createdResult = data.data;
  
        const index = this.interviewList.findIndex(item => item.id === interview.id);
  
        if (index !== -1) {
          interview.status = TestStatus.Qualified;
          interview.result = createdResult;
          this.interviewList.splice(index, 1);
          this.interviewsWithResults.push(interview);
          this.interviewService.createInterviewWithResult(interview);
        }
      }
    });
  
    return await modal.present();
  }

}
