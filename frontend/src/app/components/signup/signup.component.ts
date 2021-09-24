import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { NgForm } from '@angular/forms';
// import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  signup(userCreated: NgForm){
    this.userService.createUser(userCreated.value).subscribe(
      (res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario creado',
          showConfirmButton: false,
          timer: 1000
        })
        this.clean(userCreated)
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'El usuario ya existe',
          showConfirmButton: false,
          timer: 1000
        })
        this.clean(userCreated)
      }
    )
  }

  clean(form?: NgForm){
    if(form) {
      form.reset()
      this.userService.selectedUser = new User()
    }
  }

}
