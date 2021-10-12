import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent implements OnInit {

  constructor(public appoinmentService: AppoinmentService) { }
  
  ngOnInit(): void {
    this.getAllAppoinment();
  }

  getAllAppoinment() {
    this.appoinmentService.getAllAppoinmentByDoctor().subscribe((res: any) => {
      this.appoinmentService.appoinments = res;
      console.log(res);
    });
  }

}
