import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css'],
})
export class AppointmentsListComponent implements OnInit {
  constructor(private appoinmentService: AppoinmentService) {}

  ngOnInit(): void {
    this.getAllAppoinment();
  }

  getAllAppoinment() {
    this.appoinmentService.getAllAppoinment().subscribe((res: any) => {
      this.appoinmentService.appoinments = res;
      console.log(res);
    });
  }
}
