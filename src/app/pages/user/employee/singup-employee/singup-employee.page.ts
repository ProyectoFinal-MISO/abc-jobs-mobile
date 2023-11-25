import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { Employee } from 'src/app/model/user/employee/employee';
import { UserType } from 'src/app/model/user/user-type';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';

@Component({
  selector: 'app-singup-employee',
  templateUrl: './singup-employee.page.html',
  styleUrls: ['./singup-employee.page.scss'],
})
export class SingupEmployeePage implements OnInit {

  registrationForm: FormGroup;
  formSubmitted = false;
  selectedIdentificationType: string;
  selectedImage: string | ArrayBuffer | null = null;
  selectedCountry: any = {};
  selectedState: any = {};
  selectedCity: any = {};
  urlImage: string;

  identificationTypes = [
    { label: 'CC', value: 'CC' },
    { label: 'NIT', value: 'NIT' },
    { label: 'CE', value: 'CE' },
    { label: 'PASSPORT', value: 'PASSPORT' },
  ];

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
    private employeeService: EmployeeUserService) {
      this.selectedIdentificationType = '';
      this.urlImage ='';
      this.registrationForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
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
      });
     }


  get emailControl() {
      return this.registrationForm.get('email');
  }

  get passwordControl() {
    return this.registrationForm.get('password');
  }

  get confirmPasswordControl() {
    return this.registrationForm.get('confirmPassword');
  }

  get lastNameControl() {
    return this.registrationForm.get('lastName');
  }

  get nameControl() {
    return this.registrationForm.get('name');
  }

  get identificationControl() {
    return this.registrationForm.get('identification');
  }

  get phoneControl() {
    return this.registrationForm.get('phone');
  }

  get mobileControl() {
    return this.registrationForm.get('mobile');
  }

  get addressControl() {
    return this.registrationForm.get('address');
  }

  ngOnInit() {
  }

  redirectToSignUp(){
    this.navCtrl.navigateBack('/sign-up');
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.registrationForm.valid && this.passwordMatch()===true) {
      let userType: UserType = UserType.Employee;
      const employee = new Employee(
        this.registrationForm.value.email,
        this.registrationForm.value.password,
        this.registrationForm.value.name,
        this.registrationForm.value.lastName,
        UserType.Employee,
        this.selectedIdentificationType,
        this.registrationForm.value.identification,
        this.registrationForm.value.phone,
        this.registrationForm.value.mobile,
        this.selectedCountry.name,
        this.selectedState.name,
        this.selectedCity.name,
        this.registrationForm.value.address
      );

      const createResult = this.employeeService.createUser(employee);
      if(createResult.success){
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

  optionsCountry(event: any){
    this.selectedCountry = event.detail.value;
  }

  optionsState(event: any){
    this.selectedState = event.detail.value;
  }

  optionsCity(event: any){
    this.selectedCity = event.detail.value;
  }

  passwordMatch(): boolean {
    const password = this.registrationForm.value.password;
    const confirmPassword = this.registrationForm.value.confirmPassword;

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

}
