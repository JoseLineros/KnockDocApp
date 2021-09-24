import { Component, OnInit } from '@angular/core';
import { IpsService } from 'src/app/services/ips/ips.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css'],
})
export class RegisterDoctorComponent implements OnInit {
  constructor(public ipsService: IpsService) {}

  ngOnInit(): void {
    this.getAllIps();
  }

  getAllIps() {
    this.ipsService.getAllIps().subscribe((res) => {
      this.ipsService.ips = res;
    });
  }
}
