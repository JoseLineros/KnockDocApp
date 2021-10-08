import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(public appoinmentService: AppoinmentService) {}

  ngOnInit(): void {
    this.getAllAppoinment();
  }

  getAllAppoinment() {
    this.appoinmentService.getAll().subscribe((res: any) => {
      this.appoinmentService.appoinments = res;
      console.log(res);
    });
  }

}
