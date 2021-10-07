import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-container-sidebar',
  templateUrl: './container-sidebar.component.html',
  styleUrls: ['./container-sidebar.component.css'],
})
export class ContainerSidebarComponent implements OnInit {
  permise:Number = 0
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    // this.check();
  }

  // check() {
  //   this.permise = this.authService.check();
  // }
}
