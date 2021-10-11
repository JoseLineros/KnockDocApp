import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Auth } from 'src/app/models/Auth';
import { UserService } from 'src/app/services/user/user.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    public userService: UserService,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  signin(userLogged: NgForm) {
    this.userService.signin(userLogged.value).subscribe(
      (res) => {
        console.log(res);
        //! LocalStorage
        localStorage.setItem('token', res.token);

        if (this.authService.checkToken().role === 0) {
          this.router.navigate(['/container/dashboardAdmin']);
        } else if (this.authService.checkToken().role === 1) {
          this.router.navigate(['/doctors/dashboard']);
        } else if (this.authService.checkToken().role === 2) {
          this.router.navigate(['/users/dashboardUsers']);
        } else {
          this.router.navigate(['/signin']);
        }
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: err.error.message,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    );
  }
}
