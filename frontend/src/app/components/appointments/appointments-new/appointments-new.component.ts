import { Component, OnInit } from '@angular/core';
import { IpsService } from 'src/app/services/ips/ips.service';

@Component({
  selector: 'app-appointments-new',
  templateUrl: './appointments-new.component.html',
  styleUrls: ['./appointments-new.component.css']
})
export class AppointmentsNewComponent implements OnInit {

  constructor(private ipsService: IpsService) { }

  ngOnInit(): void {
  }

  getAllIps(){
    this.ipsService.getAllIps
  }

}
