import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { InterviewResult } from 'src/app/model/interview/interview-result';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';

@Component({
  selector: 'app-create-result-interview',
  templateUrl: './create-result-interview.page.html',
  styleUrls: ['./create-result-interview.page.scss'],
})
export class CreateResultInterviewPage implements OnInit {

  createInterviewEmployeeForm: FormGroup;
  formSubmitted = false;

  constructor(private employeeService: EmployeeUserService,
    private technicalService: TechnicalUserService
    ,private formBuilder: FormBuilder,
    private modalController: ModalController,
    private toastController: ToastController) { 
      this.createInterviewEmployeeForm = this.formBuilder.group({
        observations: ['', [Validators.required]],
        retrospective: ['', [Validators.required]],
      });
    }

  ngOnInit() {
  }

  get observationsControl() {
    return this.createInterviewEmployeeForm.get('observations');
  }

  get retrospectiveControl() {
    return this.createInterviewEmployeeForm.get('retrospective');
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  async createInterviewResult(){
    this.formSubmitted = true;
    if (this.createInterviewEmployeeForm.valid){
      const user = this.employeeService.getUserSession();
      if(user){
        const interviewResultData = new InterviewResult(
          this.createInterviewEmployeeForm.value.observations,
          this.createInterviewEmployeeForm.value.retrospective
        );
    
        console.log(interviewResultData);
        this.modalController.dismiss(interviewResultData, 'created');
        
      
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
