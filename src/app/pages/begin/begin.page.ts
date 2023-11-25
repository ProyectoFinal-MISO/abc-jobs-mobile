import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.page.html',
  styleUrls: ['./begin.page.scss'],
})
export class BeginPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  redirectToLogin(){
    this.navCtrl.navigateForward('/login');
  }

  redirectToSignUp(){
    this.navCtrl.navigateForward('/sign-up');
  }

}
