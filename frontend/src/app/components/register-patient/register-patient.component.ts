import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css'],
})
export class RegisterPatientComponent implements OnInit {
  isDisabled = false;
  submitted = false;
  resultado: string = '';
  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  formulario = new FormGroup({
    identificacion: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password2: new FormControl('', [Validators.required]),
    role: new FormControl('2', [Validators.required]),
  });

  onSubmit(user: NgForm) {
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
      this.userService.createUser(this.formulario.value).subscribe(
        (res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario Guardado',
            showConfirmButton: false,
            timer: 1500,
          });
          this.clean();
          this.router.navigate(['/signin']);
          console.log(res);
        },
        (error) => {
          // alert('usuario ya existe');
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
      this.router.navigate(['/signin']);
    } else {
      this.resultado = 'Hay datos inválidos en el formulario';
    }
  }

  clean(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

  // signup(user: NgForm) {}
}
