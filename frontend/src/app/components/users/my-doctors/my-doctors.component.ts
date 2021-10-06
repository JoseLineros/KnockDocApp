import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { MyDoctorsService } from 'src/app/services/my-doctors/my-doctors.service';


@Component({
  selector: 'app-my-doctors',
  templateUrl: './my-doctors.component.html',
  styleUrls: ['./my-doctors.component.css']
})



export class MyDoctorsComponent implements OnInit {

  doc=""
  doctor:[]=[]
 

  constructor(public mydoctorsService: MyDoctorsService) { }
  
  ngOnInit(): void {
  

    this.getUserbyID()
  }
  
  getUserbyID(){
    this.mydoctorsService.getDoctor('615cf00721f4eccabefd1bdf').subscribe((res)=>{
      this.mydoctorsService.doctores = res
      this.doc=res
      console.log(res)
    })
  }

}
