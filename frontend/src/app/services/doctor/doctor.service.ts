import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  selectedDoctor: Doctor;
  doctors: Doctor[] = [];
  // Conexion con el Back
  readonly URL_API = 'http://localhost:5000';

  constructor(private http: HttpClient) {
    this.selectedDoctor = new Doctor();
  }

  // Signin
  signin(doctor: Doctor) {
    console.log(`${this.URL_API}/doctors/signin`);
    return this.http.post<any>(`${this.URL_API}/doctors/signin`, doctor);
  }

  // Create doctor
  createDoctor(doctor: Doctor) {
    console.log(`${this.URL_API}/doctors/createDoctor`);
    return this.http.post(`${this.URL_API}/doctors/createDoctor`, doctor);
  }

  getAllDoctors() {
		return this.http.get<any>(`${this.URL_API}/doctors/getAllDoctors`);
	}
}
