import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss'],
})
export class ProjectDetailPage implements OnInit {

  projectDetailForm: FormGroup;
  personalSkillList: Array<any> = []; 
  programminglanguageList: Array<any> = [];
  participantsList: Array<any> = [];
  techResourceList: Array<any> = [];
  project: any;
  colorClasses: string[] = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private techService: TechnicalUserService) { 
      this.project = this.navParams.get('project');
      this.personalSkillList = this.project.personalSkills;
      this.programminglanguageList = this.project.technicalSkills;
      this.participantsList = this.project.teams[0].participants;
      this.techResourceList = this.project.teams[0].technicalResourcesAssociated;
      console.log("L",this.techResourceList)
      this.projectDetailForm = this.formBuilder.group({});
    }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  getStars(score: number): number[] {
    return Array.from({ length: score }, (_, index) => index + 1);
  }

  getColorClass(index: number): string {
    const colorIndex = index % this.colorClasses.length;
    return this.colorClasses[colorIndex];
  }

}
