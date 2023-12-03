import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ProjectService } from 'src/app/service/project/project.service';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';

@Component({
  selector: 'app-associate-user-project',
  templateUrl: './associate-user-project.page.html',
  styleUrls: ['./associate-user-project.page.scss'],
})
export class AssociateUserProjectPage implements OnInit {

  associateUserProjectForm: FormGroup;
  formSubmitted = false;
  selectedCompany: any = {};
  selectedProject: any = {};
  selectedTeam: any = {};
  selectedTechnicalUser: string;

  companies: Array<any> = []; 
  availableTechnicalUsers: { key: string, value: string }[] = [];

  constructor( 
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private projectService: ProjectService,
    private employeeService: EmployeeUserService,
    private technicalUserService: TechnicalUserService) {
      this.companies = this.projectService.getAllCompanies();
      this.availableTechnicalUsers = this.technicalUserService.generateGuestsList();
      this.selectedTechnicalUser = '',
      this.associateUserProjectForm = this.formBuilder.group({
        company: ['', Validators.required],
        project: ['', Validators.required],
        team: ['', Validators.required],
        technicalUser: ['', Validators.required],
      });
     }

  ngOnInit() {
  }

  optionsCompany(event: any){
    this.selectedCompany = event.detail.value;
  }

  optionsProject(event: any){
    this.selectedProject = event.detail.value;
  }

  optionsTeam(event: any){
    this.selectedTeam = event.detail.value;
  }

  optionsTechnicalUser(event: any){
    this.selectedTechnicalUser = event.detail.value;
  }

  async onSubmit() {
    this.formSubmitted = true;
  
    if (this.associateUserProjectForm.valid) {
      const user = this.employeeService.getUserSession();
      if (user) {
        const technicalUser = this.technicalUserService.getUserById(this.selectedTechnicalUser);
        if (technicalUser) {
          const result = this.projectService.addTechnicalUserToProject(
            this.selectedCompany.companyName,
             this.selectedProject.projectName,
              this.selectedTeam.teamName,
               technicalUser);
  
          if (result.success) {
            
            const toast = await this.toastController.create({
              message: 'User associated with the project successfully.',
              duration: 3000,
              color: 'success'
            });
            toast.present();
          } else {
            const toast = await this.toastController.create({
              message: `Error: ${result.error}`,
              duration: 3000,
              color: 'danger'
            });
            toast.present();
          }
        } else {
          const toast = await this.toastController.create({
            message: 'The selected Technical User does not exist in the registers',
            duration: 3000,
            color: 'danger'
          });
          toast.present();
        }
      }
    } else {
      const toast = await this.toastController.create({
        message: 'Please fill in all required fields and correct any errors.',
        duration: 3000,
        color: 'danger'
      });
      toast.present();
    }
  }

}
