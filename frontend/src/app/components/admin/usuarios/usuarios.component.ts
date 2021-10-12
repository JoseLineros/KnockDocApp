import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(public userService : UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.userService.getAllUsers().subscribe((res: any) => {
      this.userService.users = res;
      console.log(res);
    });
  }
}
