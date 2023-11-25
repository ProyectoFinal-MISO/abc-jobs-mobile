import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { Employee } from 'src/app/model/user/employee/employee';
import { UserType } from 'src/app/model/user/user-type';
import { EmployeeUserService } from 'src/app/service/user/employee-user.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.page.html',
  styleUrls: ['./edit-employee.page.scss'],
})
export class EditEmployeePage implements OnInit {

  editEmployeeForm: FormGroup;
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

  constructor(private navCtrl: NavController,
    private employeeService: EmployeeUserService,
    private formBuilder: FormBuilder,
    private toastController: ToastController) {
      this.selectedIdentificationType = '';
      this.urlImage ='';
      this.editEmployeeForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        identification: ['', Validators.required],
        phone: ['', Validators.required],
        mobile: ['', Validators.required],
        address: ['', Validators.required],
        identificationTypeName: ['', Validators.required],
        countryName: ['', Validators.required],
        stateName: ['', Validators.required],
        cityName: ['', Validators.required],
      });
    }
  
  get emailControl() {
      return this.editEmployeeForm.get('email');
  }

  get passwordControl() {
    return this.editEmployeeForm.get('password');
  }

  get confirmPasswordControl() {
    return this.editEmployeeForm.get('confirmPassword');
  }

  get lastNameControl() {
    return this.editEmployeeForm.get('lastName');
  }

  get nameControl() {
    return this.editEmployeeForm.get('name');
  }

  get identificationControl() {
    return this.editEmployeeForm.get('identification');
  }

  get phoneControl() {
    return this.editEmployeeForm.get('phone');
  }

  get mobileControl() {
    return this.editEmployeeForm.get('mobile');
  }

  get addressControl() {
    return this.editEmployeeForm.get('address');
  }

  ngOnInit() {
    this.loadUserInformation();
  }

  loadUserInformation() {
    const user = this.employeeService.getUserSession();
    console.log(user)

    if(user){
      this.editEmployeeForm.patchValue({
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        identificationTypeName: user.identificationType,
        identification: user.identification,
        phone: user.phone,
        mobile: user.mobile,
        cityName: user.city,
        stateName: user.state,
        countryName: user.country,
        address: user.address
      })
    }

  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.editEmployeeForm.valid && this.passwordMatch()===true) {
      let userType: UserType = UserType.Employee;
      const employee = new Employee(
        this.editEmployeeForm.value.email,
        this.editEmployeeForm.value.password,
        this.editEmployeeForm.value.name,
        this.editEmployeeForm.value.lastName,
        UserType.Employee,
        this.selectedIdentificationType,
        this.editEmployeeForm.value.identification,
        this.editEmployeeForm.value.phone,
        this.editEmployeeForm.value.mobile,
        this.selectedCountry.name,
        this.selectedState.name,
        this.selectedCity.name,
        this.editEmployeeForm.value.address
      );

      const updateResult = this.employeeService.updateUser(employee);
      if(updateResult.success){
        this.navCtrl.navigateForward('/tab-employee/home-employee');
        const toast = await this.toastController.create({
          message: 'Update Employee Info successful!',
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
    const password = this.editEmployeeForm.value.password;
    const confirmPassword = this.editEmployeeForm.value.confirmPassword;

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
