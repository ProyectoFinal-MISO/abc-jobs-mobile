import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { PersonalSkillsPage } from '../component/personal-skills/personal-skills.page';
import { LanguagesPage } from '../component/languages/languages.page';
import { ProgrammingLanguagesPage } from '../component/programming-languages/programming-languages.page';
import { AcademicDataPage } from '../component/academic-data/academic-data.page';
import { ProfessionalDataPage } from '../component/professional-data/professional-data.page';
import { UserType } from 'src/app/model/user/user-type';
import { TechnicalUser } from 'src/app/model/user/technical/technical';
import { AdditionalData } from 'src/app/model/user/technical/additional-data';
import { TechnicalUserService } from 'src/app/service/user/technical-user.service';
@Component({
  selector: 'app-singup-technical-resource',
  templateUrl: './singup-technical-resource.page.html',
  styleUrls: ['./singup-technical-resource.page.scss'],
})
export class SingupTechnicalResourcePage implements OnInit {

  registrationTechnicalForm: FormGroup;
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
      this.registrationTechnicalForm = this.formBuilder.group({
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
      return this.registrationTechnicalForm.get('email');
  }

  get usernameControl() {
    return this.registrationTechnicalForm.get('username');
  }

  get passwordControl() {
    return this.registrationTechnicalForm.get('password');
  }

  get confirmPasswordControl() {
    return this.registrationTechnicalForm.get('confirmPassword');
  }

  get lastNameControl() {
    return this.registrationTechnicalForm.get('lastName');
  }

  get nameControl() {
    return this.registrationTechnicalForm.get('name');
  }

  get identificationControl() {
    return this.registrationTechnicalForm.get('identification');
  }

  get birthdateControl() {
    return this.registrationTechnicalForm.get('birthdate');
  }

  get genreControl() {
    return this.registrationTechnicalForm.get('genre');
  }

  get phoneControl() {
    return this.registrationTechnicalForm.get('phone');
  }

  get mobileControl() {
    return this.registrationTechnicalForm.get('mobile');
  }

  get addressControl() {
    return this.registrationTechnicalForm.get('address');
  }

  get driverLicenseControl() {
    return this.registrationTechnicalForm.get('driverLicense');
  }

  get vehicleControl() {
    return this.registrationTechnicalForm.get('vehicle');
  }

  ngOnInit() {
  }

  redirectToSignUp(){
    this.navCtrl.navigateBack('/sign-up');
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.registrationTechnicalForm.valid && this.passwordMatch()===true) {
      let userType: UserType = UserType.TechnicalResource;
      const additionalData = new AdditionalData(
        this.registrationTechnicalForm.value.driverLicense,
        this.selectedTransfer.name,
        this.registrationTechnicalForm.value.vehicle,
      );
      const technicalUser = new TechnicalUser(
        this.registrationTechnicalForm.value.email,
        this.registrationTechnicalForm.value.username,
        this.registrationTechnicalForm.value.password,
        this.registrationTechnicalForm.value.name,
        this.registrationTechnicalForm.value.lastName,
        userType,
        this.selectedIdentificationType,
        this.registrationTechnicalForm.value.identification,
        this.registrationTechnicalForm.value.birthdate,
        this.registrationTechnicalForm.value.genre,
        this.registrationTechnicalForm.value.phone,
        this.registrationTechnicalForm.value.mobile,
        this.selectedCountry.name,
        this.selectedState.name,
        this.selectedCity.name,
        this.registrationTechnicalForm.value.address,
        additionalData,
        this.personalSkillList,
        this.academicDataList,
        this.professionalDataList,
        this.programminglanguageList,
        this.languageList
      );

      const createResult = this.technicalService.createUser(technicalUser);
      if(createResult.success){
        console.log(technicalUser)
        this.navCtrl.navigateForward('/login');
        const toast = await this.toastController.create({
          message: 'Registration successful!',
          duration: 2000,
          color: 'success'
        });
        toast.present();
      }else{
        const toast = await this.toastController.create({
          message: createResult.error,
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
    const password = this.registrationTechnicalForm.value.password;
    const confirmPassword = this.registrationTechnicalForm.value.confirmPassword;

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
      this.registrationTechnicalForm.get('birthdate')?.setErrors({ notAdult: true });
    } else {
      this.registrationTechnicalForm.get('birthdate')?.setErrors(null);
      const selectedDate = event.detail.value;
      const formattedDate = this.formatDate(selectedDate);
      this.registrationTechnicalForm.get('birthdate')?.setValue(formattedDate);
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
    const birthdateControl = this.registrationTechnicalForm.get('birthdate');
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

  getStars(score: number): number[] {
    return Array.from({ length: score }, (_, index) => index + 1);
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
