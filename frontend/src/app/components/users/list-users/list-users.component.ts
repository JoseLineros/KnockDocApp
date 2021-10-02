import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/User';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  loading: boolean = true;
  constructor(public userServices: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userServices.getAllUsers().subscribe((res) => {
      this.userServices.users = res;
      console.log(this.userServices.users);
      this.loading = false;
    });
  }
  save(users: NgForm) {
    if (users.value._id) {
      // Actualizar el formulario
      console.log(users.value);
      this.userServices.updateUser(users.value).subscribe((res) => {
        // alert('Usuario Actualizado');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Datos Guardados',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getAllUsers();
        this.clean(users);
      });
    } else {
      if (users.value.identification || users.value.nombres || users.value.apellidos === ''){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'complete los campos',
          showConfirmButton: false,
          timer: 1500,
        });
      } else{  this.userServices.createUser(users.value).subscribe(
        (res) => {
          alert('usuario Creado');
          this.getAllUsers();
          console.log(res);
          this.clean(users);
        },
        (error) => {
          // alert('usuario ya existe');
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El usuario ya existe',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );}
    
    }
  }

  clean(form?: NgForm) {}

  fillFields(users: User) {
    this.userServices.selectedUser = users;
  }


  deleteDoctor(_id: string) {}

}
