import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appoinment } from 'src/app/models/Appoinment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppoinmentService {
  appoinments: Appoinment[] = [];
  selectedAppoinment: Appoinment;
  readonly URL_API = 'http://localhost:5000';

  constructor(private http: HttpClient, private router: Router) {
    this.selectedAppoinment = new Appoinment();
  }

  getAllAppoinment() {
    return this.http.get<any>(`${this.URL_API}/appointment/getAppointmentByUser`);
  }
}
