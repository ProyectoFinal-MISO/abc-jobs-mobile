import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TechnicalTestService } from 'src/app/service/technical-test/technical-test.service';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';
import { DetailTechnicalResultPage } from '../component/detail-technical-result/detail-technical-result.page';

@Component({
  selector: 'app-technical-results',
  templateUrl: './technical-results.page.html',
  styleUrls: ['./technical-results.page.scss'],
})
export class TechnicalResultsPage implements OnInit {

  technicalTestWithResultsForm: FormGroup;
  technicalTestWithResultsList: Array<any> = [];

  constructor(private technicalService: TechnicalUserService, 
    private technicalTestService: TechnicalTestService,
    private formBuilder: FormBuilder,
    private modalController: ModalController) { 
      this.technicalTestWithResultsForm = this.formBuilder.group({
        technicalTestWithResultsList: [''],
      });
    }

  ngOnInit() {
    this.loadTechResultInformation();
  }

  ngDoCheck(){
    this.loadTechResultInformation();
  }

  loadTechResultInformation(){
    const user = this.technicalService.getUserSession();
    if(user){
      this.technicalTestWithResultsList = this.technicalTestService.getTechnicalTestWithResultsByTechnicalUserId(user.identification);
      console.log("INTERVIEW LIST: ",this.technicalTestWithResultsList)
    }
  }

  async openDetailTechTestResultModal(techTest: any) { 
    const modal = await this.modalController.create({
      component: DetailTechnicalResultPage,  
      componentProps: {
        techTest: techTest,
      },
    });

    await modal.present();
  }

  getScoreColor(score: number): string {
    if (score >= 0 && score <= 4) {
      return 'red';
    } else if (score >= 5 && score <= 7) {
      return 'yellow';
    } else if (score >= 8 && score <= 10) {
      return 'green';
    } else {
      return 'light'; 
    }
  }

}
