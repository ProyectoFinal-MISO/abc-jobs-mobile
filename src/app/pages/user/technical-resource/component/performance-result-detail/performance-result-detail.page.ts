import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-performance-result-detail',
  templateUrl: './performance-result-detail.page.html',
  styleUrls: ['./performance-result-detail.page.scss'],
})
export class PerformanceResultDetailPage implements OnInit {

  performanceDetailForm: FormGroup;
  performanceResult: any;

  constructor(private navParams: NavParams,
     private modalController: ModalController,
     private formBuilder: FormBuilder) {
      this.performanceResult = this.navParams.get('performanceResult');
      this.performanceDetailForm = this.formBuilder.group({});
  }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  getStars(score: number): number[] {
    return Array.from({ length: score }, (_, index) => index + 1);
  }

}
