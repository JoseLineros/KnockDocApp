import { Component, OnInit } from '@angular/core';
import { IpsService } from 'src/app/services/ips/ips.service';
import { UserService } from 'src/app/services/user/user.service';
import { SpecialtyService } from 'src/app/services/specialty/specialty.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';
import { StatusService } from 'src/app/services/status/status.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appointments-new',
  templateUrl: './appointments-new.component.html',
  styleUrls: ['./appointments-new.component.css'],
})
export class AppointmentsNewComponent implements OnInit {
  constructor(
    public ipsService: IpsService,
    public userService: UserService,
    public doctorService: DoctorService,
    public specialtyService: SpecialtyService,
    public appoinmentService: AppoinmentService,
    public statusService: StatusService
  ) {}

  ngOnInit(): void {
    this.getAllIps();
    //this.getAllDoctors();
    this.getAllUsers();
    this.getAllDoctorsNoRole();
    this.getAllSpecialtys();
    this.getAllAppoinment();
    this.getAllStatus();
  }

  //Traigo las citas por id, para saber si el usuario ya la tiene
  getAllAppoinment() {
    this.appoinmentService.getAllAppoinment().subscribe((res) => {
      this.appoinmentService.appoinments = res;
      console.log(res);
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.userService.users = res;
      console.log(res);
    });
  }

  getAllIps() {
    this.ipsService.getAllIps().subscribe((res) => {
      this.ipsService.ips = res;
      console.log(res);
    });
  }

  getAllDoctors() {
    this.userService.getAllDoctors().subscribe((res) => {
      this.userService.doctors = res;
      console.log(res);
    });
  }

  getAllDoctorsNoRole() {
    this.userService.getAllDoctorsNoRole().subscribe((res) => {
      this.userService.doctors = res;
      console.log(res);
    });
  }

  getAllSpecialtys() {
    this.specialtyService.getAllSpecialtys().subscribe((res) => {
      this.specialtyService.specialty = res;
      console.log(res);
    });
  }

  getAllStatus() {
    this.statusService.getAllStatus().subscribe((res) => {
      this.statusService.status = res;
      console.log(res);
    });
  }

  clean(form?: NgForm) {} //Función para limpiar el form cuando guardo

  save(appointment:NgForm){

      this.appoinmentService.createAppoinment(appointment.value).subscribe((res) => { //Debo suscribirme al método
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cita creada',
          showConfirmButton: false,
          timer: 1500
        })
        this.getAllAppoinment()
        console.log(res)
        this.clean(appointment)
      },
      (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Cita ya existe',
          showConfirmButton: false,
          timer: 1500
        })
      }
      );
  }
}
