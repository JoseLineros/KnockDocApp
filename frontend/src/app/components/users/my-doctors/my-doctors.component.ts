import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { MyDoctorsService } from 'src/app/services/my-doctors/my-doctors.service';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';



@Component({
  selector: 'app-my-doctors',
  templateUrl: './my-doctors.component.html',
  styleUrls: ['./my-doctors.component.css']
})



export class MyDoctorsComponent implements OnInit {

  
  doctor:any
 

  constructor(public mydoctorsService: MyDoctorsService) { 
    this.doctor = ""
  }
  
  ngOnInit(): void {
  

    this.doctorhistory()
  }
  
  doctorhistory(){
    this.mydoctorsService.getDoctors('').subscribe((res)=>{
      this.doctor = res
      console.log(res)
    })
  }
}