import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/models/User';
import { IpsService } from 'src/app/services/ips/ips.service';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  loading: boolean = true;
  role = 2;

  constructor(public userService: UserService, public ipsService: IpsService) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllIps();
    this.clean();
  }

  getAllIps() {
    this.ipsService.getAllIps().subscribe((res: any) => {
      this.ipsService.ips = res;
      console.log(res);
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.userService.users = res;
      console.log(this.userService.users);
      this.loading = false;
    });
  }

  save(user: NgForm) {
    if (
      user.value.identificacion === '' ||
      user.value.nombre === '' ||
      user.value.apellidos === '' ||
      user.value.fechaNacimiento === '0000-00-00' ||
      user.value.ciudad === '' ||
      user.value.direccion === '' ||
      user.value.celular === '' ||
      user.value.ipsAsociado === '' ||
      user.value.email === '' ||
      user.value.password === ''
    ) {
      // this.errores = 'fata llenar datos del formulario \n';
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Fata llenar datos del formulario',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    let expReg =
      /[a-z0-9]+(\.[_0-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9]+)*(\.[a-z]{2,15})/i.test(
        user.value.email
      );
    if (!expReg) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ingresa un email valido',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    let fechaDeNacimiento = new Date(user.value.fechaNacimiento).getTime();
    let hoy: any = new Date().getTime();
    let diff = Math.round(
      (hoy - fechaDeNacimiento) / (1000 * 60 * 60 * 24 * 365)
    );

    if (diff < 18) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Es menor de edad, fecha no aceptada',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    if (user.value._id) {
      // Actualizar el formulario
      console.log(user.value);
      this.userService.updateUser(user.value).subscribe((res) => {
        // alert('Usuario Actualizado');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Datos Guardados',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getAllUsers();
        this.clean(user);
      });
    } else {
      this.userService.createUser(user.value).subscribe(
        (res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario Creado',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getAllUsers();
          console.log(res);
          this.clean(user);
        },
        (error) => {
          // alert('usuario ya existe');
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al crear usuario',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    }
  }

  clean(form?: NgForm) {
    if (form) {
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

  fillFields(user: User) {
    this.userService.selectedUser = user;
  }

  deleteUser(_id: string) {
    Swal.fire({
      title: 'Esta seguro de eliminar este registro?',
      text: 'Perdera toda la informacion registrada!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(_id).subscribe((res) => {
          this.getAllUsers();
        });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'usuario eliminado',
          showConfirmButton: false,
          timer: 1500,
        });
        this.clean();
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Accion cancelada',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}
