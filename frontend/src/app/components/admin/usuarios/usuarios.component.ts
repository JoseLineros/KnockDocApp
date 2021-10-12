import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { AppoinmentService } from 'src/app/services/appoinment/appoinment.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  loading: boolean = true;
  usersAdmin: [] = [];
  usersDoctors: [] = [];
  usersPatients: [] = [];

  constructor(public userService : UserService,
    public appoinmentService: AppoinmentService,) {}

  ngOnInit(): void {
    this.getAllDoctors();
  }
  getAllDoctors() {
    this.userService.getAllDoctors().subscribe((res) => {
      this.userService.doctors = res;
      console.log(this.userService.doctors);
      this.loading = false;
    });
  }

  getAllAppoinment() {
    this.appoinmentService.getAllAppoinment().subscribe((res) => {
      this.appoinmentService.appoinments = res;
      console.log(res);
    });
  }
}
