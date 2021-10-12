import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { MyDoctorsService } from 'src/app/services/my-doctors/my-doctors.service';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-my-doctors',
  templateUrl: './my-doctors.component.html',
  styleUrls: ['./my-doctors.component.css']
})



export class MyDoctorsComponent implements OnInit {

  
  doctor:any
 

  constructor(public mydoctorsService: MyDoctorsService, public appoinmentService: AppoinmentService, public userService: UserService,) { 
    this.doctor = ""
  }
  
  ngOnInit(): void {
    this.getAllAppoinment();  
    this.doctorhistory()
    this.getAllDoctors()
  }
  
  doctorhistory(){
    this.mydoctorsService.getDoctors('').subscribe((res)=>{
      this.doctor = res
      console.log(res)
    })
  }

  getAllAppoinment() {
    this.appoinmentService.getAllAppoinment().subscribe((res: any) => {
      this.appoinmentService.appoinments = res;
      console.log(res);
    });
  }

  getAllDoctors() {
    this.userService.getAllDoctors().subscribe((res) => {
      this.userService.doctors = res;
      console.log(this.userService.doctors);
    });
  }
}