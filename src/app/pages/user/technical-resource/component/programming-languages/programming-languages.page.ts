import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-programming-languages',
  templateUrl: './programming-languages.page.html',
  styleUrls: ['./programming-languages.page.scss'],
})
export class ProgrammingLanguagesPage implements OnInit {

  programmingLanguageForm: FormGroup;
  formSubmitted = false;
  selectedRating: number = 0;

  constructor(private formBuilder: FormBuilder,
    private modalController: ModalController,
    private toastController: ToastController) { 
    this.programmingLanguageForm = this.formBuilder.group({
      programmingLanguageName: ['', [Validators.required]],
      score: [null],
    });
  }

  ngOnInit() {
  }

  get programmingLanguageNameControl() {
    return this.programmingLanguageForm.get('programmingLanguageName');
  }

  get scoreControl() {
    return this.programmingLanguageForm.get('score');
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  selectRating(star: number) {
    this.selectedRating = star;
    this.programmingLanguageForm.get('score')?.setValue(star);
  }

  async createProgrammingLanguage(){
    this.formSubmitted = true;
    if (this.programmingLanguageForm.valid){
      const programmingLanguageData = {
        name: this.programmingLanguageForm.value.programmingLanguageName,
        score: this.programmingLanguageForm.value.score,
      };
  
      console.log(programmingLanguageData);
      this.modalController.dismiss(programmingLanguageData, 'created');
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
