import { Component, OnInit } from '@angular/core';
import { CreateResultInterviewPage } from '../component/create-result-interview/create-result-interview.page';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';
import { InterviewService } from 'src/app/service/interview/interview-service.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-interview-results',
  templateUrl: './interview-results.page.html',
  styleUrls: ['./interview-results.page.scss'],
})
export class InterviewResultsPage implements OnInit {

  interviewResultEmployeeForm: FormGroup;
  interviewList: Array<any> = [];

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
    console.log("LOAD USER: ",user)
    if(user){
      this.interviewList = this.interviewService.getInterviewsByEmployeeId(user.identification);
      console.log("INTERVIEW LIST: ",this.interviewList)
    }
  }

  async openCreateResultInterviewModal() {
    const modal = await this.modalController.create({
      component: CreateResultInterviewPage,
      backdropDismiss: false,
      animated: true,
      presentingElement: await this.modalController.getTop(),
      mode: 'ios',
    });

    modal.onDidDismiss().then((data) => {
      if (data.role === 'created' && data.data) {
        this.addInterview(data.data);
        this.interviewService.setInterviews(this.interviewList);
      }
    });

    return await modal.present();
  }

  addInterview(interview: any) {
    this.interviewList.push(interview);
    console.log(this.interviewList)
  }


}
