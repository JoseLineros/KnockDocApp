import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  loading: boolean = true;
  constructor(public userServices: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userServices.getAllUsers().subscribe((res) => {
      this.userServices.users = res;
      console.log(this.userServices.users);
      this.loading = false;
    });
  }

  

}
