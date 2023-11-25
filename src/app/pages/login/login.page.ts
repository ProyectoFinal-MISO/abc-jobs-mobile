import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { UserType } from 'src/app/model/user/user-type';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  formSubmitted = false;

  constructor(
    private navCtrl: NavController, 
    private formBuilder: FormBuilder, 
    private toastController: ToastController,
    private technicalService: TechnicalUserService,
    private employeeService: EmployeeUserService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      checkboxABC: [false],
      checkboxTechnical: [false],
    });
    this.updateCheckboxValidity();
  }

  onCheckboxChange() {
    this.updateCheckboxValidity();
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  ngOnInit() {
  }

  redirectToBegin(){
    this.navCtrl.navigateBack('/begin');
  }

  async onSubmit(){
    this.formSubmitted = true;

    if (this.loginForm.valid) {
      let userType: UserType = UserType.Default;

      if(this.loginForm.value.checkboxABC){
        userType = UserType.Employee;
      }else if(this.loginForm.value.checkboxTechnical){
        userType = UserType.TechnicalResource
      }

      const loginResult = userType === UserType.Employee 
      ? this.employeeService.loginUser(this.loginForm.value.email,this.loginForm.value.password,userType) 
      : this.technicalService.loginUser(this.loginForm.value.email,this.loginForm.value.password,userType);
      
      if(loginResult.success) {

        if (userType === UserType.Employee) {
          this.navCtrl.navigateForward('/tab-employee');
        
        } else if (userType === UserType.TechnicalResource) {
          this.navCtrl.navigateForward('/tab-technical-resource');
        }

      }else{
        const toast = await this.toastController.create({
          message: loginResult.error,
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
    const checkboxABC = this.loginForm.get('checkboxABC');
    const checkboxTechnical = this.loginForm.get('checkboxTechnical');

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
