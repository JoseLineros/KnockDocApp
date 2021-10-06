import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { MyDoctorsService } from 'src/app/services/my-doctors/my-doctors.service';

@Component({
  selector: 'app-my-doctors',
  templateUrl: './my-doctors.component.html',
  styleUrls: ['./my-doctors.component.css']
})
export class MyDoctorsComponent implements OnInit {

  doctor:[]=[]

  constructor(public mydoctorsService: MyDoctorsService) { }

  ngOnInit(): void {
    this.getUserbyID()
  }
  
  getUserbyID(){
    this.mydoctorsService.getDoctor().subscribe((res)=>{
      this.mydoctorsService.doctores = res
      console.log(res)
    })
  }

}
