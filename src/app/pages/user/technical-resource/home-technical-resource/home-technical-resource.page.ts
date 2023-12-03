import { Component, OnInit } from '@angular/core';
import { InterviewService } from 'src/app/service/interview/interview-service.service';
import { PerformanceTechnicalUserService } from 'src/app/service/performance/performance-technical-user.service';
import { ProjectService } from 'src/app/service/project/project.service';
import { TechnicalTestService } from 'src/app/service/technical-test/technical-test.service';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';

@Component({
  selector: 'app-home-technical-resource',
  templateUrl: './home-technical-resource.page.html',
  styleUrls: ['./home-technical-resource.page.scss'],
})
export class HomeTechnicalResourcePage implements OnInit {

  lastInterviews: any[] = [];
  lastInterviewsWithResults : any[] = [];
  lastTechnicalResults : any[] = [];
  lastPerformanceResults : any[] = [];
  lastTeamsAssociated: any[] = [];

  constructor(private technicalService:TechnicalUserService,
    private interviewsService: InterviewService,
    private technicalTestService: TechnicalTestService,
    private performanceService: PerformanceTechnicalUserService,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.loadTechInformation();
  }

  ngDoCheck(){
    this.loadTechInformation();
  }

  loadTechInformation() {
    const user = this.technicalService.getUserSession();
    if(user){
      this.lastInterviews = this.technicalTestService.getLatestTechnicalTestsByTechnicalUserId(user.identification);
      this.lastInterviewsWithResults = this.technicalTestService.getLatestTechnicalTestsWithResultsByTechnicalUserId(user.identification);
      this.lastTechnicalResults = this.interviewsService.getLastThreeInterviewsWithResultsByTechnicalUserId(user.identification);
      this.lastPerformanceResults = this.performanceService.getLatestPerformanceResultsByTechnicalId(user.identification);
      this.lastTeamsAssociated = this.projectService.getLatestProjectsForTechnicalUser(user.identification);
    }
  }

}
