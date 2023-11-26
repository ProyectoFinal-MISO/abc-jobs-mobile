import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';
import { ProfessionalDataPage } from '../../component/professional-data/professional-data.page';
import { AcademicDataPage } from '../../component/academic-data/academic-data.page';
import { ProgrammingLanguagesPage } from '../../component/programming-languages/programming-languages.page';
import { LanguagesPage } from '../../component/languages/languages.page';
import { PersonalSkillsPage } from '../../component/personal-skills/personal-skills.page';
import { AdditionalData } from 'src/app/model/user/technical/additional-data';
import { TechnicalUser } from 'src/app/model/user/technical/technical';
import { UserType } from 'src/app/model/user/user-type';

@Component({
  selector: 'app-edit-technical-resource',
  templateUrl: './edit-technical-resource.page.html',
  styleUrls: ['./edit-technical-resource.page.scss'],
})
export class EditTechnicalResourcePage implements OnInit {

  editTechnicalForm: FormGroup;
  formSubmitted = false;
  selectedIdentificationType: string;
  selectedGenre: string;
  birthdate: string = new Date().toISOString();
  selectedImage: string | ArrayBuffer | null = null;
  selectedCountry: any = {};
  selectedState: any = {};
  selectedCity: any = {};
  selectedTransfer: any ={}
  urlImage: string;
  personalSkillList: Array<any> = []; 
  languageList: Array<any> = []; 
  programminglanguageList: Array<any> = [];
  academicDataList: Array<any> = [];
  professionalDataList: Array<any> = [];

  identificationTypes = [
    { label: 'CC', value: 'CC' },
    { label: 'NIT', value: 'NIT' },
    { label: 'CE', value: 'CE' },
    { label: 'PASSPORT', value: 'PASSPORT' },
  ];

  genres = [
    { label: 'MALE', value: 'MALE'},
    { label: 'FEMALE', value: 'FEMALE'},
    { label: 'OTHER', value: 'OTHER'},
  ]

  transferOptions = [
    { label: 'YES', value: 'YES'},
    { label: 'NO', value: 'NO'}
  ]

  countries = [
    {
      name: 'Colombia',
      states: [
        { name: 'Bogota DC', cities: [{ name: 'Bogota' }] },
        { name: 'Antioquia', cities: [{ name: 'Medellín' }, { name: 'Envigado' }] },
        { name: 'Valle del Cauca', cities: [{ name: 'Cali' }, { name: 'Palmira' }] },
        { name: 'Cundinamarca', cities: [{ name: 'Zipaquira' }, { name: 'Soacha' }] },
        { name: 'Magdalena', cities: [{ name: 'Santa Marta' }, { name: 'Pueblo Viejo' }] }
      ],
    },
    {
      name: 'Brazil',
      states: [
        { name: 'São Paulo', cities: [{ name: 'São Paulo' }, { name: 'Campinas' }] },
        { name: 'Rio de Janeiro', cities: [{ name: 'Rio de Janeiro' }, { name: 'Niterói' }] },
        { name: 'Minas Gerais', cities: [{ name: 'Belo Horizonte' }, { name: 'Uberlândia' }] },
        { name: 'Bahia', cities: [{ name: 'Salvador' }, { name: 'Feira de Santana' }] },
        { name: 'Amazonas', cities: [{ name: 'Manaus' }, { name: 'Itacoatiara' }] }
      ],
    },
    {
      name: 'Argentina',
      states: [
        { name: 'Buenos Aires', cities: [{ name: 'Buenos Aires' }, { name: 'La Plata' }] },
        { name: 'Córdoba', cities: [{ name: 'Córdoba' }, { name: 'Villa María' }] },
        { name: 'Santa Fe', cities: [{ name: 'Santa Fe' }, { name: 'Rosario' }] },
        { name: 'Mendoza', cities: [{ name: 'Mendoza' }, { name: 'San Rafael' }] },
        { name: 'Tucumán', cities: [{ name: 'San Miguel de Tucumán' }, { name: 'Yerba Buena' }] }
      ],
    },
    {
      name: 'Chile',
      states: [
        { name: 'Santiago Metropolitan', cities: [{ name: 'Santiago' }, { name: 'Maipú' }] },
        { name: 'Valparaíso', cities: [{ name: 'Valparaíso' }, { name: 'Viña del Mar' }] },
        { name: 'Biobío', cities: [{ name: 'Concepción' }, { name: 'Talcahuano' }] },
        { name: 'Maule', cities: [{ name: 'Talca' }, { name: 'Curicó' }] },
        { name: 'Araucanía', cities: [{ name: 'Temuco' }, { name: 'Padre Las Casas' }] }
      ],
    },
    {
      name: 'Peru',
      states: [
        { name: 'Lima', cities: [{ name: 'Lima' }, { name: 'Callao' }] },
        { name: 'Arequipa', cities: [{ name: 'Arequipa' }, { name: 'Cayma' }] },
        { name: 'Cusco', cities: [{ name: 'Cusco' }, { name: 'San Jerónimo' }] },
        { name: 'Lambayeque', cities: [{ name: 'Chiclayo' }, { name: 'Ferreñafe' }] },
        { name: 'La Libertad', cities: [{ name: 'Trujillo' }, { name: 'La Esperanza' }] }
      ],
    }
  ];
  
  constructor(
    private navCtrl: NavController, 
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private modalController: ModalController,
    private technicalService: TechnicalUserService) {
      this.selectedIdentificationType = '';
      this.selectedGenre = '',
      this.urlImage ='';
      this.editTechnicalForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        identification: ['', Validators.required],
        phone: ['', Validators.required],
        mobile: ['', Validators.required],
        address: ['', Validators.required],
        identificationType: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        birthdate: ['', Validators.required],
        genre: ['', Validators.required],
        driverLicense: ['', Validators.required],
        vehicle: ['', Validators.required],
        transfer: ['', Validators.required],
      });
  }

  get emailControl() {
      return this.editTechnicalForm.get('email');
  }

  get usernameControl() {
    return this.editTechnicalForm.get('username');
  }

  get passwordControl() {
    return this.editTechnicalForm.get('password');
  }

  get confirmPasswordControl() {
    return this.editTechnicalForm.get('confirmPassword');
  }

  get lastNameControl() {
    return this.editTechnicalForm.get('lastName');
  }

  get nameControl() {
    return this.editTechnicalForm.get('name');
  }

  get identificationControl() {
    return this.editTechnicalForm.get('identification');
  }

  get birthdateControl() {
    return this.editTechnicalForm.get('birthdate');
  }

  get genreControl() {
    return this.editTechnicalForm.get('genre');
  }

  get phoneControl() {
    return this.editTechnicalForm.get('phone');
  }

  get mobileControl() {
    return this.editTechnicalForm.get('mobile');
  }

  get addressControl() {
    return this.editTechnicalForm.get('address');
  }

  get driverLicenseControl() {
    return this.editTechnicalForm.get('driverLicense');
  }

  get vehicleControl() {
    return this.editTechnicalForm.get('vehicle');
  }

  ngOnInit() {
    this.loadUserInformation();
  }

  loadUserInformation() {
    const user = this.technicalService.getUserSession();
    console.log("LOAD USER: ",user)

    if(user){
      this.editTechnicalForm.patchValue({
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        identificationType: user.identificationType,
        identification: user.identification,
        birthdate: user.birthdate,
        genre: user.genre,
        phone: user.phone,
        mobile: user.mobile,
        city: user.city,
        state: user.state,
        country: user.country,
        address: user.address,
        driverLicense: user.additionalData.driverLicense,
        transfer: user.additionalData.transferAvailability,
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

  async onSubmit() {
    this.formSubmitted = true;
    if (this.editTechnicalForm.valid && this.passwordMatch()===true) {
      let userType: UserType = UserType.TechnicalResource;
      const additionalData = new AdditionalData(
        this.editTechnicalForm.value.driverLicense,
        this.selectedTransfer.name,
        this.editTechnicalForm.value.vehicle,
      );
      const technicalUser = new TechnicalUser(
        this.editTechnicalForm.value.email,
        this.editTechnicalForm.value.username,
        this.editTechnicalForm.value.password,
        this.editTechnicalForm.value.name,
        this.editTechnicalForm.value.lastName,
        userType,
        this.selectedIdentificationType,
        this.editTechnicalForm.value.identification,
        this.editTechnicalForm.value.birthdate,
        this.editTechnicalForm.value.genre,
        this.editTechnicalForm.value.phone,
        this.editTechnicalForm.value.mobile,
        this.selectedCountry.name,
        this.selectedState.name,
        this.selectedCity.name,
        this.editTechnicalForm.value.address,
        additionalData,
        this.personalSkillList,
        this.academicDataList,
        this.professionalDataList,
        this.programminglanguageList,
        this.languageList
      );

      const updateResult = this.technicalService.updateUser(technicalUser);
      if(updateResult.success){
        this.navCtrl.navigateForward('/tab-technical-resource/home-technical-resource');
        const toast = await this.toastController.create({
          message: 'Update Technical Resource Info successful!',
          duration: 2000,
          color: 'success'
        });
        toast.present();
      }else{
        const toast = await this.toastController.create({
          message: updateResult.error,
          duration: 3000,
          position: 'bottom',
          color: 'danger',
        });
        toast.present();
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

  optionsFn(event: any){
    this.selectedIdentificationType = event.detail.value;
  }

  optionsGenre(event: any){
    this.selectedGenre = event.detail.value;
  }

  optionsCountry(event: any){
    this.selectedCountry = event.detail.value;
  }

  optionsState(event: any){
    this.selectedState = event.detail.value;
  }

  optionsCity(event: any){
    this.selectedCity = event.detail.value;
  }

  optionsTransfer(event: any){
    this.selectedTransfer = event.detail.value;
  }

  passwordMatch(): boolean {
    const password = this.editTechnicalForm.value.password;
    const confirmPassword = this.editTechnicalForm.value.confirmPassword;

    return password === confirmPassword;
  }

  selectImage(event: any) {
    const inputElement = event.target as HTMLInputElement;
  
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      
      console.log('Nombre del archivo:', file.name);
      const imageUrl = URL.createObjectURL(file);
      this.urlImage = imageUrl;
      this.selectedImage = imageUrl;
    }
  }

  openImagePicker() {
    const inputElement = document.getElementById('imageInput') as HTMLInputElement;
    inputElement.click();
  }

  updateBirthdate(event: any): void {
    const birthdate = new Date(event.detail.value);
    const isAdultPerson = this.isAdult(birthdate);
  
    if (!isAdultPerson) {
      this.editTechnicalForm.get('birthdate')?.setErrors({ notAdult: true });
    } else {
      this.editTechnicalForm.get('birthdate')?.setErrors(null);
      const selectedDate = event.detail.value;
      const formattedDate = this.formatDate(selectedDate);
      this.editTechnicalForm.get('birthdate')?.setValue(formattedDate);
    }
  }
  
  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString('es-ES', options);
    return formattedDate;
  }

  isAdult(birthdate: Date): boolean {
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    if (
      today.getMonth() < birthdate.getMonth() ||
      (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())
    ) {
      return age - 1 >= 18;
    }
  
    return age >= 18;
  }

  hasNotAdultError(): boolean {
    const birthdateControl = this.editTechnicalForm.get('birthdate');
    return birthdateControl ? birthdateControl.hasError('notAdult') : false;
  }

  async openModalPersonalSkills() {
    const modal = await this.modalController.create({
      component: PersonalSkillsPage,
      backdropDismiss: false,
      animated: true,
      presentingElement: await this.modalController.getTop(),
      mode: 'ios',
    });

    modal.onDidDismiss().then((data) => {
      if (data.role === 'created' && data.data) {
        this.addPersonalSkill(data.data);
      }
    });
    return await modal.present();
  }

  addPersonalSkill(skill: any) {
    this.personalSkillList.push(skill);
    console.log(this.personalSkillList)
  }

  async openModalLanguage() {
    const modal = await this.modalController.create({
      component: LanguagesPage,
      backdropDismiss: false,
      animated: true,
      presentingElement: await this.modalController.getTop(),
      mode: 'ios',
    });

    modal.onDidDismiss().then((data) => {
      if (data.role === 'created' && data.data) {
        this.addLanguage(data.data);
      }
    });
    return await modal.present();
  }

  addLanguage(language: any) {
    this.languageList.push(language);
    console.log(this.languageList)
  }

  async openModalProgrammingLanguage() {
    const modal = await this.modalController.create({
      component: ProgrammingLanguagesPage,
      backdropDismiss: false,
      animated: true,
      presentingElement: await this.modalController.getTop(),
      mode: 'ios',
    });

    modal.onDidDismiss().then((data) => {
      if (data.role === 'created' && data.data) {
        this.addProgrammingLanguage(data.data);
      }
    });
    return await modal.present();
  }

  addProgrammingLanguage(programminglanguage: any) {
    this.programminglanguageList.push(programminglanguage);
    console.log(this.programminglanguageList)
  }

  async openModalAcademicData() {
    const modal = await this.modalController.create({
      component: AcademicDataPage,
      backdropDismiss: false,
      animated: true,
      presentingElement: await this.modalController.getTop(),
      mode: 'ios',
    });

    modal.onDidDismiss().then((data) => {
      if (data.role === 'created' && data.data) {
        this.addAcademicData(data.data);
      }
    });
    return await modal.present();
  }

  addAcademicData(academicData: any) {
    this.academicDataList.push(academicData);
    console.log(this.academicDataList)
  }

  async openModalProfessionalData() {
    const modal = await this.modalController.create({
      component: ProfessionalDataPage,
      backdropDismiss: false,
      animated: true,
      presentingElement: await this.modalController.getTop(),
      mode: 'ios',
    });

    modal.onDidDismiss().then((data) => {
      if (data.role === 'created' && data.data) {
        this.addProfessionalData(data.data);
      }
    });
    return await modal.present();
  }

  addProfessionalData(professionalData: any) {
    this.professionalDataList.push(professionalData);
    console.log(this.professionalDataList)
  }

}
