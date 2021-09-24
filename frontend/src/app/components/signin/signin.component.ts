import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user/user.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {}

  signin(userLogged: NgForm) {
    this.userService.signin(userLogged.value).subscribe(
      (res) => {
        console.log(res);
        //! LocalStorage
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
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
