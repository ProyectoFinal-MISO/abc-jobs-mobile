import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Interview } from 'src/app/model/interview/interview';
import { InterviewResult } from 'src/app/model/interview/interview-result';
import { TestStatus } from 'src/app/model/test-status';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';

@Component({
  selector: 'app-create-interview',
  templateUrl: './create-interview.page.html',
  styleUrls: ['./create-interview.page.scss'],
})
export class CreateInterviewPage implements OnInit {

  createInterviewEmployeeForm: FormGroup;
  formSubmitted = false;
  selectedCompany: string;
  selectedPlace: string;
  selectedGuest: string;
  startDate: string = new Date().toISOString();
  endDate: string = new Date().toISOString();
  currentDate: string;
  static nextId = 6;

  companies = [
    {label: 'Company A', value: 'Company A'},
    {label: 'Company B', value: 'Company B'},
    {label: 'Company C', value: 'Company C'},
    {label: 'Company D', value: 'Company D'},
    {label: 'Company E', value: 'Company E'}
  ];

  places = [
    {label: 'Virtual', value: 'Virtual'},
    {label: 'In Person', value: 'In Person'}
  ];

  guests: { key: string, value: string }[] = [];

  constructor(private employeeService: EmployeeUserService,
    private technicalService: TechnicalUserService
    ,private formBuilder: FormBuilder,
    private modalController: ModalController,
    private toastController: ToastController) { 
      this.selectedCompany = '',
      this.selectedPlace = '',
      this.selectedGuest = '',
      this.guests = this.technicalService.generateGuestsList();
      this.currentDate = new Date().toISOString();
      this.createInterviewEmployeeForm = this.formBuilder.group({
        title: ['', [Validators.required]],
        company: ['', [Validators.required]],
        description: ['', [Validators.required]],
        place: ['', [Validators.required]],
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]],
        guest: ['', [Validators.required]],
        link: ['', [Validators.required]]
      });
    }

  ngOnInit() {
  }

  get titleControl() {
    return this.createInterviewEmployeeForm.get('title');
  }

  get descriptionControl() {
    return this.createInterviewEmployeeForm.get('description');
  }

  get startDateControl() {
    return this.createInterviewEmployeeForm.get('startDate');
  }

  get endDateControl() {
    return this.createInterviewEmployeeForm.get('endDate');
  }

  get linkControl() {
    return this.createInterviewEmployeeForm.get('link');
  }

  optionsGuest(event: any){
    this.selectedGuest = event.detail.value;
  }

  optionsCompany(event: any){
    this.selectedCompany = event.detail.value;
  }

  optionsPlace(event: any){
    this.selectedPlace = event.detail.value;
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  async createInterview(){
    this.formSubmitted = true;
    if (this.createInterviewEmployeeForm.valid){
      if (this.validateDate()) {
        const user = this.employeeService.getUserSession();
        if(user){
          const interviewData = new Interview(
            CreateInterviewPage.nextId++,
            user.identification,
            this.createInterviewEmployeeForm.value.title,
            this.createInterviewEmployeeForm.value.description,
            this.selectedCompany,
            this.selectedGuest,
            this.createInterviewEmployeeForm.value.startDate,
            this.createInterviewEmployeeForm.value.endDate,
            this.selectedPlace,
            this.createInterviewEmployeeForm.value.link,
            TestStatus.Created,
            new InterviewResult('',''),
          );
      
          console.log(interviewData);
          this.modalController.dismiss(interviewData, 'created');
        }
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
    return this.endDate >= this.startDate;
  }

  updateStartDate(event: any): void {
    const selectedDate = event.detail.value;
    const formattedDate = this.formatDate(selectedDate);
    this.startDate = selectedDate;
    this.createInterviewEmployeeForm.get('startDate')?.setValue(formattedDate);  
  }

  updateEndDate(event: any): void {
    const selectedDate = event.detail.value;
    const formattedDate = this.formatDate(selectedDate);
    this.endDate = selectedDate;
    this.createInterviewEmployeeForm.get('endDate')?.setValue(formattedDate);  
  }
  
  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    };

    const formattedDate = new Date(dateString).toLocaleDateString('es-ES', options);
    return formattedDate;
}


}
