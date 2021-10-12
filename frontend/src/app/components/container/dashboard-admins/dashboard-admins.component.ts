import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IpsService } from 'src/app/services/ips/ips.service';
import { SpecialtyService } from 'src/app/services/specialty/specialty.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-dashboard-admins',
  templateUrl: './dashboard-admins.component.html',
  styleUrls: ['./dashboard-admins.component.css'],
})
export class DashboardAdminsComponent {
  usuarios = 0;
  doctores = 0;
  lasIPS = 0;
  especialidades = 0;

  // single = [];
  view: [number, number] = [900, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  single = [
    {
      name: 'Usuarios',
      value: 10,
    },
    {
      name: 'Doctores',
      value: 5,
    },
    {
      name: 'IPS',
      value: 4,
    },
    {
      name: 'Especialidades',
      value: 3,
    },
  ];

  constructor(
    public userService: UserService,
    public ipsService: IpsService,
    public specialtyService: SpecialtyService
  ) {
    // Object.assign(this, { single });
  }

  onSelect(data: any): void {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    // console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res) => {
      this.usuarios = res;
    });
  }

  getAllDoctors() {
    this.userService.getAllDoctors().subscribe((res) => {
      this.doctores = res;
    });
  }

  getAllIps() {
    this.ipsService.getAllIps().subscribe((res: any) => {
      this.lasIPS = res;
    });
  }

  getAllSpecialtys() {
    this.specialtyService.getAllSpecialtys().subscribe((res: any) => {
      this.especialidades = res;
    });
  }
}
