import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TechnicalTestService } from 'src/app/service/technical-test/technical-test.service';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';
import { CreateTechnicalResultPage } from '../component/create-technical-result/create-technical-result.page';
import { TestStatus } from 'src/app/model/test-status';

@Component({
  selector: 'app-technical-results',
  templateUrl: './technical-results.page.html',
  styleUrls: ['./technical-results.page.scss'],
})
export class TechnicalResultsPage implements OnInit {

  techResultEmployeeForm: FormGroup;
  techTestList: Array<any> = [];
  techTestWithResults: Array<any> = [];

  constructor(private employeeService: EmployeeUserService, 
    private technicalTestService: TechnicalTestService,
    private formBuilder: FormBuilder,
    private modalController: ModalController) { 
      this.techResultEmployeeForm = this.formBuilder.group({
        techTestList: ['']
      });
    }

  ngOnInit() {
    this.loadTechTestInformation();
  }

  ngDoCheck() {
    this.loadTechTestInformation();
  }

  loadTechTestInformation() {
    const user = this.employeeService.getUserSession();
    console.log("LOAD USER: ",user)
    if(user){
      this.techTestList = this.technicalTestService.getTechnicalTestCreatedByEmployeeId(user.identification);
      this.techTestWithResults = this.technicalTestService.getTechnicalTestWithResultsByEmployeeUserId(user.identification);
    }
  }

  async openCreateResultTechnicalTestModal(techTest: any) {
    const modal = await this.modalController.create({
      component: CreateTechnicalResultPage,
      backdropDismiss: false,
      animated: true,
      presentingElement: await this.modalController.getTop(),
      mode: 'ios',
    });
  
    modal.onDidDismiss().then((data) => {
      if (data.role === 'created' && data.data) {
        const createdResult = data.data;
  
        const index = this.techTestList.findIndex(item => item.id === techTest.id);
  
        if (index !== -1) {
          techTest.status = TestStatus.Qualified;
          techTest.result = createdResult;
          this.techTestList.splice(index, 1);
          this.techTestWithResults.push(techTest);
          this.technicalTestService.createTechnicalTestWithResult(techTest);
        }
      }
    });
  
    return await modal.present();
  }

}
