import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { TechnicalTestResult } from 'src/app/model/technical-test/technical-test-result';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';

@Component({
  selector: 'app-create-technical-result',
  templateUrl: './create-technical-result.page.html',
  styleUrls: ['./create-technical-result.page.scss'],
})
export class CreateTechnicalResultPage implements OnInit {

  createTechnicalTestForm: FormGroup;
  formSubmitted = false;
  selectedSegments: number = 0;

  constructor(private employeeService: EmployeeUserService,
    private formBuilder: FormBuilder, 
    private modalController: ModalController,
    private toastController: ToastController) {
    this.createTechnicalTestForm = this.formBuilder.group({
      score: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      observations: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  get scoreControl() {
    return this.createTechnicalTestForm.get('score');
  }

  get observationsControl() {
    return this.createTechnicalTestForm.get('observations');
  }

  getScoreColor(): string {
    if (this.selectedSegments >= 0 && this.selectedSegments <= 4) {
      return 'danger';
    } else if (this.selectedSegments >= 5 && this.selectedSegments <= 7) {
      return 'warning';
    } else if (this.selectedSegments >= 8 && this.selectedSegments <= 10) {
      return 'success';
    } else {
      return '';
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  async createTechnicalTestResult() {

    this.formSubmitted = true;
    if (this.createTechnicalTestForm.valid){
      const user = this.employeeService.getUserSession();
      if(user){
        const technicalResultData = new TechnicalTestResult(
          this.createTechnicalTestForm.value.score,
          this.createTechnicalTestForm.value.observations
        );
        console.log('SCORE', this.createTechnicalTestForm.value.score);
    
        this.modalController.dismiss(technicalResultData, 'created');
        
    }else{
      const toast = await this.toastController.create({
        message: 'Please fill in all required fields and correct any errors.',
        duration: 3000,
        color: 'danger'
      });
      toast.present();
      }
    }
  }

}
