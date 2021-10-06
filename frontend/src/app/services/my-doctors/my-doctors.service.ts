import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User'

@Injectable({
  providedIn: 'root'
})
export class MyDoctorsService {

  selectedDoctor: User = new User()

  doctores: User[] = [];
  readonly URL_API='http://localhost:5000'
  
  constructor(private http: HttpClient) {
    this.selectedDoctor = new User();
  }

  // Get Doctor by ID
  getDoctor(){
    console.log(`${this.URL_API}/users/getUserById`)
    return this.http.get<User[]>(`${this.URL_API}/users/getUserById`)
  }
}
