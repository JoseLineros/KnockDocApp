import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css'],
})
export class AppointmentsListComponent implements OnInit {
  constructor(public appoinmentService: AppoinmentService) {}

  ngOnInit(): void {
    this.getAllAppoinment();
  }

  getAllAppoinment() {
    this.appoinmentService.getAllAppoinment().subscribe((res: any) => {
      this.appoinmentService.appoinments = res;
      console.log(res);
    });
  }

  cancelarCita(appointment: any) {
    console.log(appointment);
    appointment.status = 'cancelada';
    this.appoinmentService
      .updateAppoinment(appointment)
      .subscribe((res: any) => {
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: 'Cita cancelada',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getAllAppoinment();
      });
  }
}
