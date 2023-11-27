import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detail-interview-result',
  templateUrl: './detail-interview-result.page.html',
  styleUrls: ['./detail-interview-result.page.scss'],
})
export class DetailInterviewResultPage implements OnInit {

  interviewResultDetailForm: FormGroup;
  interviewResult: any;

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private formBuilder: FormBuilder) {
      this.interviewResult = this.navParams.get('interviewResult');
      this.interviewResultDetailForm = this.formBuilder.group({});
 }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
