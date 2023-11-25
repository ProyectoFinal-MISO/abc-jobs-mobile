import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Language } from 'src/app/model/user/technical/language';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.page.html',
  styleUrls: ['./languages.page.scss'],
})
export class LanguagesPage implements OnInit {

  languageForm: FormGroup;
  formSubmitted = false;
  selectedRating: number = 0;

  constructor(private formBuilder: FormBuilder,
    private modalController: ModalController,
    private toastController: ToastController) { 
    this.languageForm = this.formBuilder.group({
      language: ['', [Validators.required]],
      score: ['0', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  get languageControl() {
    return this.languageForm.get('language');
  }

  get scoreControl() {
    return this.languageForm.get('score');
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  selectRating(star: number) {
    this.selectedRating = star;
    this.languageForm.get('score')?.setValue(star);
  }

  async createLanguage(){
    this.formSubmitted = true;
    if (this.languageForm.valid){
      const languageData = new Language(
        this.languageForm.value.language,
        this.languageForm.value.score
      );
  
      console.log(languageData);
      this.modalController.dismiss(languageData, 'created');
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
