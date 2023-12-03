import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { InterviewService } from 'src/app/service/interview/interview-service.service';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';
import { DetailInterviewResultPage } from '../component/detail-interview-result/detail-interview-result.page';

@Component({
  selector: 'app-interview-results',
  templateUrl: './interview-results.page.html',
  styleUrls: ['./interview-results.page.scss'],
})
export class InterviewResultsPage implements OnInit {

  interviewWithResultsEmployeeForm: FormGroup;
  interviewWithResultsList: Array<any> = [];

  constructor(private technicalService: TechnicalUserService, 
    private interviewService: InterviewService,
    private formBuilder: FormBuilder,
    private modalController: ModalController) { 
      this.interviewWithResultsEmployeeForm = this.formBuilder.group({
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
      this.interviewWithResultsList = this.interviewService.getInterviewsWithResultsByTechnicalUserId(user.identification);
    }
  }

  async openDetailInterviewResultModal(interview: any) { 
    const modal = await this.modalController.create({
      component: DetailInterviewResultPage,  
      componentProps: {
        interviewResult: interview,
      },
    });

    await modal.present();
  }

}
