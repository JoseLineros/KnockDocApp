import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { IpsService } from 'src/app/services/ips/ips.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css'],
})
export class RegisterDoctorComponent implements OnInit {
  isDisabled = false;
  submitted = false;
  resultado: string = '';
  // formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public ipsService: IpsService,
    public userService: UserService,
    private router: Router
  ) {}

    formulario = new FormGroup({
    identificacion: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.required]),
    tp: new FormControl('', [Validators.required]),
    ipsAsociado: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]),
    role: new FormControl('1', [Validators.required]),
  });

  onSubmit() {
    this.submitted = true;
    if (
      this.formulario.get(['password'])?.value !=
      this.formulario.get(['password2'])?.value
    ) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Las contraseñas deben ser iguales',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if (this.formulario.valid) {
      this.resultado = 'Todos los datos son válidos';
      console.log(this.formulario.value);

      this.userService.createUser(this.formulario.value).subscribe((res) => {
        console.log(res);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario Guardado',
          showConfirmButton: false,
          timer: 1500,
        });
      });
      this.clean();
      this.router.navigate(['/signin']);
    } else {
      this.resultado = 'Hay datos inválidos en el formulario';
    }
  }

  ngOnInit(): void {
    this.getAllIps();
  }

  getAllIps() {
    this.ipsService.getAllIps().subscribe((res: any) => {
      this.ipsService.ips = res;
      console.log(res);
    });
  }

  clean(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

  // createDoctor() {
  //   var id = this.userprofileForm.controls['identificacion'].value;
  //   var firstName = this.userprofileForm.controls['nombre'].value;
  //   console.log(id)
  //   console.log(firstName)
  // }
}
