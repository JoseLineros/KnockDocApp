import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { IpsService } from 'src/app/services/ips/ips.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.css'],
})
export class RegisterDoctorComponent implements OnInit {
  constructor(public ipsService: IpsService, public doctorService: DoctorService) {}

  ngOnInit(): void {
    this.getAllIps();
  }

  getAllIps() {
    this.ipsService.getAllIps().subscribe((res:any) => {
      this.ipsService.ips = res;
      console.log(res)
    });
  }
}
