import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';

@Component({
  selector: 'app-delete-technical-resource',
  templateUrl: './delete-technical-resource.page.html',
  styleUrls: ['./delete-technical-resource.page.scss'],
})
export class DeleteTechnicalResourcePage implements OnInit {

  deleteTechnicalForm: FormGroup;
  formSubmitted = false;

  constructor(private navCtrl: NavController, 
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private technicalService: TechnicalUserService) {
      this.deleteTechnicalForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        checkboxdeleteABC: [false],
    });
  }

  ngOnInit() {
  }

  get emailControl() {
    return this.deleteTechnicalForm.get('email');
  }

  get passwordControl() {
    return this.deleteTechnicalForm.get('password');
  }

  get confirmPasswordControl() {
    return this.deleteTechnicalForm.get('confirmPassword');
  }

  get checkboxdeleteABCControl() {
    return this.deleteTechnicalForm.get('checkboxdeleteABC');
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.deleteTechnicalForm.valid && this.passwordMatch()===true && this.deleteTechnicalForm.value.checkboxdeleteABC) {

      const usserSession = this.technicalService.getUserSession();
      const deleteResult = this.technicalService.deleteUser( usserSession!.identification, usserSession!.email, usserSession!.password);

      if(deleteResult.success){
        this.navCtrl.navigateForward('/begin');
        const toast = await this.toastController.create({
          message: 'Delete Technical Resource Profile successful!',
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
    const password = this.deleteTechnicalForm.value.password;
    const confirmPassword = this.deleteTechnicalForm.value.confirmPassword;

    return password === confirmPassword;
  }

}
