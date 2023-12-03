import { Component, OnInit } from '@angular/core';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';

@Component({
  selector: 'app-tab-technical-resource',
  templateUrl: './tab-technical-resource.page.html',
  styleUrls: ['./tab-technical-resource.page.scss'],
})
export class TabTechnicalResourcePage implements OnInit {

  technicalResource: any;

  constructor(private technicalService: TechnicalUserService) {
     this.technicalResource = technicalService.getUserSession();
   }

  ngOnInit() {
  }

}
