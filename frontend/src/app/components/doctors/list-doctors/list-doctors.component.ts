import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user/user.service';
import { IpsService } from 'src/app/services/ips/ips.service';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css'],
})
export class ListDoctorsComponent implements OnInit {
  loading: boolean = true;
  usersAdmin: [] = [];
  usersDoctors: [] = [];
  usersPatients: [] = [];
  constructor(
    public authService: AuthService,
    public doctorService: DoctorService,
    public userService: UserService,
    public ipsService: IpsService
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllIps();
    this.getAllDoctors();
  }


  getAllAdmins() {
    this.userService.getAllAdmins().subscribe((res) => {
      this.userService.admins = res;
      console.log(this.userService.admins);
      this.loading = false;
    });
  }

  getAllDoctors() {
    this.userService.getAllDoctors().subscribe((res) => {
      this.userService.doctors = res;
      console.log(this.userService.doctors);
      this.loading = false;
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.userService.users = res;
      console.log(this.userService.users);
      this.loading = false;
    });
  }



  getAllIps() {
    this.ipsService.getAllIps().subscribe((res: any) => {
      this.ipsService.ips = res;
      console.log(res);
    });
  }

  getSpecialtyById(id: string) {
    this.userService.getSpecialtyById(id).subscribe((res) => {});
  }

  save(doctor: NgForm) {
    if (doctor.value._id) {
      // Actualizar el formulario
      console.log(doctor.value);
      this.userService.updateUser(doctor.value).subscribe((res) => {
        // alert('Usuario Actualizado');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Datos Guardados',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getAllUsers();
        this.clean(doctor);
      });
    } else {
      this.userService.createUser(doctor.value).subscribe(
        (res) => {
          alert('usuario Creado');
          this.getAllUsers();
          console.log(res);
          this.clean(doctor);
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
      );
    }
  }

  clean(form?: NgForm) {}

  fillFields(doctor: User) {
    this.userService.selectedUser = doctor;
  }

  deleteDoctor(_id: string) {}
}