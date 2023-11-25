import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';

@Component({
  selector: 'app-get-technical-resource',
  templateUrl: './get-technical-resource.page.html',
  styleUrls: ['./get-technical-resource.page.scss'],
})
export class GetTechnicalResourcePage implements OnInit {

  getTechnicalForm: FormGroup;
  academicDataList: Array<any> = []; 
  professionalDataList: Array<any> = []; 
  programminglanguageList: Array<any> = []; 
  languageList: Array<any> = []; 
  personalSkillList: Array<any> = []; 

  constructor(private technicalService: TechnicalUserService,
    private formBuilder: FormBuilder) {
      this.getTechnicalForm = this.formBuilder.group({
        email: [''],
        name: [''],
        lastName: [''],
        identificationType: [''],
        identification: [''],
        birthdate: [''],
        genre: [''],
        phoneNumber: [''],
        mobile: [''],
        city: [''],
        state: [''],
        country: [''],
        address: [''],
        driverLicense: [''],
        transferAvailability: [''],
        vehicle: [''],
        academicDataList: [''],
        professionalDataList: [''],
        programminglanguageList:[''], 
        languageList: [''],
        personalSkillList: [''],
      })
     }

  ngOnInit() {
    this.loadUserInformation();
  }

  ngDoCheck() {
    this.loadUserInformation();
  }

  loadUserInformation() {
    const user = this.technicalService.getUserSession();
    console.log("LOAD USER: ",user)

    if(user){
      this.getTechnicalForm.patchValue({
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        identificationType: user.identificationType,
        identification: user.identification,
        birthdate: user.birthdate,
        genre: user.genre,
        phoneNumber: user.phone,
        mobile: user.mobile,
        city: user.city,
        state: user.state,
        country: user.country,
        address: user.address,
        driverLicense: user.additionalData.driverLicense,
        transferAvailability: user.additionalData.transferAvailability,
        vehicle: user.additionalData.vehicle,
      })
      this.academicDataList = user.academicData;
      this.professionalDataList = user.professionalData; 
      this.programminglanguageList = user.programmingLanguages; 
      this.languageList = user.languages;
      this.personalSkillList = user.personalSkills;
    }
  }

  getStars(score: number): number[] {
    return Array.from({ length: score }, (_, index) => index + 1);
  }



}
