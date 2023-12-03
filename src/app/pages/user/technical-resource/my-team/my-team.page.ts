import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ProjectService } from 'src/app/service/project/project.service';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';
import { ProjectDetailPage } from '../component/project-detail/project-detail.page';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.page.html',
  styleUrls: ['./my-team.page.scss'],
})
export class MyTeamPage implements OnInit {


  myTeamsForm: FormGroup;
  myProjectsList: Array<any> = []

  constructor(private technicalService: TechnicalUserService,
    private projectService: ProjectService,
    private formBuilder: FormBuilder,
    private modalController: ModalController) {
      this.myTeamsForm = this.formBuilder.group({
        myProjectsList: [''],
      });
     }

  ngOnInit() {
    this.loadMyProjectsInformation();
  }

  ngDoCheck(){
    this.loadMyProjectsInformation()
  }

  loadMyProjectsInformation() {
    const user = this.technicalService.getUserSession();
    if(user){
      this.myProjectsList = this.projectService.getProjectsForTechnicalUser(user.identification);
      console.log(this.myProjectsList)
    }
  }

  async openProjectModal(project: any) { 
    const modal = await this.modalController.create({
      component: ProjectDetailPage,  
      componentProps: {
        project: project,
      },
    });

    await modal.present();
  }

  chunkArray(array: any[], chunkSize: number): any[] {
    const resultArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      resultArray.push(array.slice(i, i + chunkSize));
    }
    return resultArray;
  }

}
