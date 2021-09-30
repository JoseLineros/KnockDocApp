import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Specialty } from 'src/app/models/Specialty';
@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {
  selectedSpecialty: Specialty;
  specialty: Specialty[] = [];
  // Conexion con el Back
  readonly URL_API = 'http://localhost:5000';

  constructor(private http: HttpClient) {
    this.selectedSpecialty = new Specialty();
  }

  getAllSpecialtys() {
    return this.http.get<any>(`${this.URL_API}/specialtys/getAllSpecialtys`);
  }
}
