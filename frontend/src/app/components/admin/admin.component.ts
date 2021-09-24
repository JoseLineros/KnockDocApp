import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUsers().subscribe((res) => {
      this.userService.users = res;
      console.log(res);
    });

  }

  signup(user:NgForm){

  }
}
