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
import { SpecialtyService } from 'src/app/services/specialty/specialty.service';

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
  role = 1;
  constructor(
    public authService: AuthService,
    public doctorService: DoctorService,
    public userService: UserService,
    public ipsService: IpsService,
    public specialtyService: SpecialtyService
  ) {}

  ngOnInit(): void {
    this.getAllIps();
    this.getAllDoctors();
    this.getAllSpecialtys();
    this.clean();
  }

  getAllDoctors() {
    this.userService.getAllDoctors().subscribe((res) => {
      this.userService.doctors = res;
      console.log(this.userService.doctors);
      this.loading = false;
    });
  }

  getAllIps() {
    this.ipsService.getAllIps().subscribe((res: any) => {
      this.ipsService.ips = res;
      console.log(res);
    });
  }

  getAllSpecialtys() {
    this.specialtyService.getAllSpecialtys().subscribe((res: any) => {
      this.specialtyService.specialty = res;
      console.log(res);
    });
  }

  getSpecialtyById(id: string) {
    this.userService.getSpecialtyById(id).subscribe((res) => {});
  }

  save(doctor: NgForm) {
    if (
      doctor.value.identificacion === '' ||
      doctor.value.nombre === '' ||
      doctor.value.apellidos === '' ||
      doctor.value.fechaNacimiento === '0000-00-00' ||
      doctor.value.ciudad === '' ||
      doctor.value.direccion === '' ||
      doctor.value.celular === '' ||
      doctor.value.tp === '' ||
      doctor.value.ipsAsociado === '' ||
      doctor.value.especialidad === '' ||
      doctor.value.email === '' ||
      doctor.value.password === ''
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
        doctor.value.email
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

    let fechaDeNacimiento = new Date(doctor.value.fechaNacimiento).getTime();
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

    if (doctor.value._id) {
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
        this.getAllDoctors();
        this.clean(doctor);
      });
    } else {
      this.userService.createUser(doctor.value).subscribe(
        (res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Doctor Creado',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getAllDoctors();
          console.log(res);
          this.clean(doctor);
        },
        (error) => {
          // alert('usuario ya existe');
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error al crear doctor',
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

  fillFields(doctor: User) {
    this.userService.selectedUser = doctor;
  }

  deleteDoctor(_id: string) {
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
          this.getAllDoctors();
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
