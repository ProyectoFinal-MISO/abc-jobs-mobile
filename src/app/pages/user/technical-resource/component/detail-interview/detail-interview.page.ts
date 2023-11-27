import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detail-interview',
  templateUrl: './detail-interview.page.html',
  styleUrls: ['./detail-interview.page.scss'],
})
export class DetailInterviewPage implements OnInit {

  interviewDetailForm: FormGroup;
  interview: any;

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private formBuilder: FormBuilder) {
      this.interview = this.navParams.get('interview');
      this.interviewDetailForm = this.formBuilder.group({});
 }

 ngOnInit() {
 }

 dismissModal() {
   this.modalController.dismiss();
 }

}
