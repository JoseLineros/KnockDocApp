import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-container-navbar',
  templateUrl: './container-navbar.component.html',
  styleUrls: ['./container-navbar.component.css'],
})
export class ContainerNavbarComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
