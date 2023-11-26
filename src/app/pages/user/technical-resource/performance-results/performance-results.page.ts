import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PerformanceTechnicalUserService } from 'src/app/service/performance/performance-technical-user.service';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';

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
    private formBuilder: FormBuilder) { 
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
    console.log("LOAD USER: ",user)
    if(user){
      this.performanceResultsList = this.performanceService.getPerformanceResultsByTechnicalId(user.identification);
    }
  }

  getStars(score: number): number[] {
    return Array.from({ length: score }, (_, index) => index + 1);
  }

}
