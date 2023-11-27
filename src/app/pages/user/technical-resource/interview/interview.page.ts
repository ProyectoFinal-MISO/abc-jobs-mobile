import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { InterviewService } from 'src/app/service/interview/interview-service.service';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';
import { DetailInterviewPage } from '../component/detail-interview/detail-interview.page';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.page.html',
  styleUrls: ['./interview.page.scss'],
})
export class InterviewPage implements OnInit {

  interviewEmployeeForm: FormGroup;
  interviewList: Array<any> = [];

  constructor(private technicalService: TechnicalUserService, 
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

  ngDoCheck() {
    this.loadInterviewInformation();
  }

  loadInterviewInformation() {
    const user = this.technicalService.getUserSession();
    if(user){
      this.interviewList = this.interviewService.getInterviewsByTechnicalUserId(user.identification);
      console.log("INTERVIEW LIST: ",this.interviewList)
    }
  }

  async openDetailInterviewModal(interview: any) { 
    const modal = await this.modalController.create({
      component: DetailInterviewPage,  
      componentProps: {
        interview: interview,
      },
    });

    await modal.present();
  }

}
