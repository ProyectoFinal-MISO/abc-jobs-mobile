import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { PersonalSkill } from 'src/app/model/user/technical/personal-skill';

@Component({
  selector: 'app-personal-skills',
  templateUrl: './personal-skills.page.html',
  styleUrls: ['./personal-skills.page.scss'],
})
export class PersonalSkillsPage implements OnInit {

  formSubmitted = false;
  personalSkillForm: FormGroup;
  selectedRating: number = 0;

  constructor(private formBuilder: FormBuilder,
    private modalController: ModalController,
    private toastController: ToastController) { 
    this.personalSkillForm = this.formBuilder.group({
      personalSkillName: ['', [Validators.required]],
      score: ['0', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  get personalSkillNameControl() {
    return this.personalSkillForm.get('personalSkillName');
  }

  get scoreControl() {
    return this.personalSkillForm.get('score');
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  selectRating(star: number) {
    this.selectedRating = star;
    this.personalSkillForm.get('score')?.setValue(star);
  }

  async createPersonalSkill(){
    this.formSubmitted = true;
    if (this.personalSkillForm.valid){
      const personalSkillData = new PersonalSkill(
        this.personalSkillForm.value.personalSkillName,
        this.personalSkillForm.value.score
      );

      console.log(personalSkillData);
      this.modalController.dismiss(personalSkillData, 'created');
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
