import { Component, OnInit } from '@angular/core';
import { IpsService } from 'src/app/services/ips/ips.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-appointments-new',
  templateUrl: './appointments-new.component.html',
  styleUrls: ['./appointments-new.component.css'],
})
export class AppointmentsNewComponent implements OnInit {
  constructor(private ipsService: IpsService, private userService:UserService) {}

  ngOnInit(): void {
    this.getAllIps();
    this.getAllDoctors();
  }

  getAllIps() {
    this.ipsService.getAllIps().subscribe((res) => {
      this.ipsService.ips = res;
      console.log(res);
    });
  }

  getAllDoctors() {
    this.userService.getAllDoctors().subscribe((res) => {
      this.userService.users = res;
      console.log(res);
    });
  }
}
