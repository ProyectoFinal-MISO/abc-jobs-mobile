import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { UserType } from 'src/app/model/user/user-type';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signUpForm: FormGroup;
  formSubmitted = false;

  constructor(
    private navCtrl: NavController, 
    private formBuilder: FormBuilder, 
    private toastController: ToastController) {
    this.signUpForm = this.formBuilder.group({
      checkboxABC: [false],
      checkboxTechnical: [false],
    });
    this.updateCheckboxValidity();
  }

  onCheckboxChange() {
    this.updateCheckboxValidity();
  }

  ngOnInit() {
  }

  redirectToBegin(){
    this.navCtrl.navigateBack('/begin');
  }

  async onSubmit(){
    this.formSubmitted = true;

    if (this.signUpForm.valid) {
      let userType: UserType = UserType.Default;

      if(this.signUpForm.value.checkboxABC){
        userType = UserType.Employee;
      }else if(this.signUpForm.value.checkboxTechnical){
        userType = UserType.TechnicalResource
      }

      console.log(
        'User Type To Create:', userType
      );

      if (userType === UserType.Employee) {
        this.navCtrl.navigateForward('/singup-employee');
      } else if (userType === UserType.TechnicalResource) {
        this.navCtrl.navigateForward('/singup-technical-resource');
      } else {
        const toast = await this.toastController.create({
          message: 'Invalid form. Make sure you fill out all required fields correctly.',
          duration: 3000,
          position: 'bottom',
          color: 'danger',
        });
        toast.present();
      }
      
    } else {
      const toast = await this.toastController.create({
        message: 'Invalid form. Make sure you fill out all required fields correctly.',
        duration: 3000,
        position: 'bottom',
        color: 'danger',
      });
      toast.present();
    }
  }

  updateCheckboxValidity() {
    const checkboxABC = this.signUpForm.get('checkboxABC');
    const checkboxTechnical = this.signUpForm.get('checkboxTechnical');

    if (checkboxABC && checkboxTechnical) {
      if (checkboxABC.value) {
        checkboxTechnical.disable();
      } else if (checkboxTechnical.value) {
        checkboxABC.disable();
      } else {
        checkboxABC.enable();
        checkboxTechnical.enable();
      }
    }
  }


}
