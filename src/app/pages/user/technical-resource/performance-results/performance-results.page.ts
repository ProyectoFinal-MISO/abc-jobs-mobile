import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PerformanceTechnicalUserService } from 'src/app/service/performance/performance-technical-user.service';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';
import { PerformanceResultDetailPage } from '../component/performance-result-detail/performance-result-detail.page';

@Component({
  selector: 'app-performance-results',
  templateUrl: './performance-results.page.html',
  styleUrls: ['./performance-results.page.scss'],
})
export class PerformanceResultsPage implements OnInit {

  performanceResultTechnicalForm: FormGroup;
  performanceResultsList: Array<any> = [];

  constructor(private technicalService: TechnicalUserService,
    private performanceService: PerformanceTechnicalUserService,
    private formBuilder: FormBuilder,
    private modalController: ModalController) { 
      this.performanceResultTechnicalForm = this.formBuilder.group({
        performanceResultsList: [''],
      });
    }

  ngOnInit() {
    this.loadPerformanceResultInformation();
  }

  ngDoCheck() {
    this.loadPerformanceResultInformation();
  }

  loadPerformanceResultInformation() {
    const user = this.technicalService.getUserSession();
    if(user){
      this.performanceResultsList = this.performanceService.getPerformanceResultsByTechnicalId(user.identification);
    }
  }

  async openPerformanceModal(performanceResult: any) { 
    const modal = await this.modalController.create({
      component: PerformanceResultDetailPage,  
      componentProps: {
        performanceResult: performanceResult,
      },
    });

    await modal.present();
  }

  getStars(score: number): number[] {
    return Array.from({ length: score }, (_, index) => index + 1);
  }

}
