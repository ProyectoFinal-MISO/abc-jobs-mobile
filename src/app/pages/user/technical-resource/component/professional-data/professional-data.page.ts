import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { ProfessionalData } from 'src/app/model/user/technical/professional-data';

@Component({
  selector: 'app-professional-data',
  templateUrl: './professional-data.page.html',
  styleUrls: ['./professional-data.page.scss'],
})
export class ProfessionalDataPage implements OnInit {

  professionalDataForm: FormGroup;
  formSubmitted = false;
  startDate: string = new Date().toISOString();
  endDate: string = new Date().toISOString();
  
  constructor(private formBuilder: FormBuilder,
    private modalController: ModalController,
    private toastController: ToastController) {
      this.professionalDataForm = this.formBuilder.group({
        titleJob: ['', [Validators.required]],
        details: [''],
        companyName: ['', [Validators.required]],
        startDate: ['', [Validators.required]],
        endDate: [''],
      });
    }

  ngOnInit() {
  }

  get titleJobControl() {
    return this.professionalDataForm.get('titleJob');
  }

  get companyNameControl() {
    return this.professionalDataForm.get('companyName');
  }

  get detailsControl() {
    return this.professionalDataForm.get('details');
  }

  get startDateControl() {
    return this.professionalDataForm.get('startDate');
  }

  get endDateControl() {
    return this.professionalDataForm.get('endDate');
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  async createProfessionalData(){

    this.formSubmitted = true;
    if (this.professionalDataForm.valid){
      if (this.validateDate()) {
        const professional = new ProfessionalData(
          this.professionalDataForm.value.titleJob,
          this.professionalDataForm.value.companyName,
          this.professionalDataForm.value.details,
          this.professionalDataForm.value.startDate,
          this.professionalDataForm.value.endDate
        );
    
        console.log(professional);
        this.modalController.dismiss(professional, 'created');
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
    this.professionalDataForm.get('startDate')?.setValue(formattedDate);  
  }

  updateEndDate(event: any): void {
    const selectedDate = event.detail.value;
    const formattedDate = this.formatDate(selectedDate);
    this.endDate = selectedDate;
    this.professionalDataForm.get('endDate')?.setValue(formattedDate);  
  }
  
  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString('es-ES', options);
    return formattedDate;
  }


}
