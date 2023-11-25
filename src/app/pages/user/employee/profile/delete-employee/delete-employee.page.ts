import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.page.html',
  styleUrls: ['./delete-employee.page.scss'],
})
export class DeleteEmployeePage implements OnInit {

  deleteEmployeeForm: FormGroup;
  formSubmitted = false;

  constructor(private navCtrl: NavController, 
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private employeeService: EmployeeUserService) {
      this.deleteEmployeeForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        checkboxdeleteABC: [false],
    });
  }

  get emailControl() {
    return this.deleteEmployeeForm.get('email');
  }

  get passwordControl() {
    return this.deleteEmployeeForm.get('password');
  }

  get confirmPasswordControl() {
    return this.deleteEmployeeForm.get('confirmPassword');
  }

  get checkboxdeleteABCControl() {
    return this.deleteEmployeeForm.get('checkboxdeleteABC');
  }

  ngOnInit() {
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.deleteEmployeeForm.valid && this.passwordMatch()===true && this.deleteEmployeeForm.value.checkboxdeleteABC) {

      const usserSession = this.employeeService.getUserSession();
      const deleteResult = this.employeeService.deleteUser( usserSession!.identification, usserSession!.email, usserSession!.password);

      if(deleteResult.success){
        this.navCtrl.navigateForward('/begin');
        const toast = await this.toastController.create({
          message: 'Delete Employee Profile successful!',
          duration: 2000,
          color: 'success'
        });
        toast.present();
      }else{
        const toast = await this.toastController.create({
          message: deleteResult.error,
          duration: 3000,
          position: 'bottom',
          color: 'danger',
        });
        toast.present();
      }
    } else {
      const toast = await this.toastController.create({
        message: 'Please fill in all required fields and correct any errors.',
        duration: 3000,
        color: 'danger'
      });
      toast.present();
    }
  }

  passwordMatch(): boolean {
    const password = this.deleteEmployeeForm.value.password;
    const confirmPassword = this.deleteEmployeeForm.value.confirmPassword;

    return password === confirmPassword;
  }


}
