import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, PopoverController, ToastController } from '@ionic/angular';
import { AcademicData } from 'src/app/model/user/technical/academic-data';

@Component({
  selector: 'app-academic-data',
  templateUrl: './academic-data.page.html',
  styleUrls: ['./academic-data.page.scss'],
})
export class AcademicDataPage implements OnInit {

  academicDataForm: FormGroup;
  formSubmitted = false;
  selectedEducationLevel: string;
  startDate: string = new Date().toISOString();
  endDate: string = new Date().toISOString();

  educationLevels = [
    { label: 'PRIMARY SCHOOL', value: 'Primary School' },
    { label: 'SECONDARY SCHOOL', value: 'Secondary School' },
    { label: 'TECHNOLOGIST', value: 'Technologist' },
    { label: 'GENERAL BACCALAUREATE', value: 'General Baccalaureate' },
    { label: 'TECHNOLOGICAL BACCALAUREATE', value: 'Technological Baccalaureate' },
    { label: 'TECHNOLOGICAL PROFESSIONAL', value: 'Technological Professional' },
    { label: 'COLLEGE DEGREE', value: 'College Degree' },
    { label: 'SPECIALIZATION', value: 'Specialization' },
    { label: 'MASTER', value: 'Master' },
    { label: 'DOCTORATE', value: 'Doctorate'}
  ];

  constructor(private formBuilder: FormBuilder,
    private modalController: ModalController,
    private toastController: ToastController) { 
      this.selectedEducationLevel = '',
      this.academicDataForm = this.formBuilder.group({
        schoolName: ['', [Validators.required]],
        title: ['', [Validators.required]],
        educationLevel: ['', [Validators.required]],
        startDate: ['', [Validators.required]],
        endDate: [''],
      });
    }

  ngOnInit() {
  }

  get schoolNameControl() {
    return this.academicDataForm.get('schoolName');
  }

  get titleControl() {
    return this.academicDataForm.get('title');
  }

  get startDateControl() {
    return this.academicDataForm.get('startDate');
  }

  get endDateControl() {
    return this.academicDataForm.get('endDate');
  }

  optionsEducationLevel(event: any){
    this.selectedEducationLevel = event.detail.value;
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  async createAcademicData(){
    this.formSubmitted = true;
    if (this.academicDataForm.valid){
      if (this.validateDate()) {
        const academicData = new AcademicData(
          this.academicDataForm.value.schoolName,
          this.academicDataForm.value.title,
          this.selectedEducationLevel,
          this.academicDataForm.value.startDate,
          this.academicDataForm.value.endDate
        );
    
        console.log(academicData);
        this.modalController.dismiss(academicData, 'created');
      }else {
        const toast = await this.toastController.create({
          message: 'The end date must not be less than the start date, please check again',
          duration: 3000,
          color: 'danger'
        });
        toast.present();
      }
    }else{
      const toast = await this.toastController.create({
        message: 'Please fill in all required fields and correct any errors.',
        duration: 3000,
        color: 'danger'
      });
      toast.present();
    }
  }

  validateDate(): boolean {
    console.log(this.startDate);
    console.log(this.endDate);
    const lastDate = this.endDate === null ? new Date() : this.endDate;
    const beginDate = this.startDate;  
    return lastDate >= beginDate;
  }

  updateStartDate(event: any): void {
    const selectedDate = event.detail.value;
    const formattedDate = this.formatDate(selectedDate);
    this.startDate = selectedDate;
    this.academicDataForm.get('startDate')?.setValue(formattedDate);  
  }

  updateEndDate(event: any): void {
    const selectedDate = event.detail.value;
    const formattedDate = this.formatDate(selectedDate);
    this.endDate = selectedDate;
    this.academicDataForm.get('endDate')?.setValue(formattedDate);  
  }
  
  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString('es-ES', options);
    return formattedDate;
  }


}
