import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(public appoinmentService: AppoinmentService, public userService: UserService ) {}

  ngOnInit(): void {
    this.getAllAppoinment();
  }

  getAllAppoinment() {
    this.appoinmentService.getAllAppoinmentByDoctor().subscribe((res: any) => {
      this.appoinmentService.appoinments = res;
      console.log(res);
    });
  }

  /*getAlluser() {
    this.userService.getAllUsers().subscribe((res: any) => {
      this.userService.users = res;
      console.log(res);
    });
  }*/

}
