import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CreateInterviewPage } from '../component/create-interview/create-interview.page';
import { InterviewService } from 'src/app/service/interview/interview-service.service';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.page.html',
  styleUrls: ['./schedule-interview.page.scss'],
})
export class ScheduleInterviewPage implements OnInit {

  interviewEmployeeForm: FormGroup;
  interviewList: Array<any> = [];

  constructor(private employeeService: EmployeeUserService, 
    private interviewService: InterviewService,
    private formBuilder: FormBuilder,
    private modalController: ModalController) { 
      this.interviewEmployeeForm = this.formBuilder.group({
        interviewList: [''],
      });
    }

  ngOnInit() {
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

  async openCreateInterviewModal() {
    const modal = await this.modalController.create({
      component: CreateInterviewPage,
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
