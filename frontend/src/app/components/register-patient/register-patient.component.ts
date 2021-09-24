import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css'],
})
export class RegisterPatientComponent implements OnInit {
  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  signup(user: NgForm) {
    this.userService.createUser(user.value).subscribe(
      (res) => {
        // alert('Apartamento Creado');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario Guardado',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res);
      },
      (error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'El Usuario ya existe',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
    this.router.navigate(['/signin']);
  }
}
