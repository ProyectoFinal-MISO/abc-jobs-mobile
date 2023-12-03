import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detail-technical-result',
  templateUrl: './detail-technical-result.page.html',
  styleUrls: ['./detail-technical-result.page.scss'],
})
export class DetailTechnicalResultPage implements OnInit {

  TechnicalTestResultDetailForm: FormGroup;
  techTest: any;

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private formBuilder: FormBuilder) { 
      this.techTest = this.navParams.get('techTest')
      this.TechnicalTestResultDetailForm = this.formBuilder.group({});
    }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  getScoreColor(score: number): string {
    if (score >= 0 && score <= 4) {
      return 'red';
    } else if (score >= 5 && score <= 7) {
      return 'yellow';
    } else if (score >= 8 && score <= 10) {
      return 'green';
    } else {
      return 'light'; 
    }
  }

}
