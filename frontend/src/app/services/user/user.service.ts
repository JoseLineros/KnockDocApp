import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/User';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser: User;
  admins: User[] = [];
  doctors: User[] = [];
  users: User[] = [];
  // Conexion con el Back
  readonly URL_API = 'http://localhost:5000';

  constructor(private http: HttpClient, private router: Router) {
    this.selectedUser = new User();
  }

  getSpecialtyById(_id: any) {
    return this.http.get<any>(
      `${this.URL_API}/specialtys/getSpecialtyById/${_id}`
    );
  }

  // Signup

  // Signin
  signin(user: User) {
    console.log(`${this.URL_API}/users/signin`);
    return this.http.post<any>(`${this.URL_API}/users/signin`, user);
  }

  // Create user
  createUser(user: User) {
    console.log(`${this.URL_API}/users/createUser`);
    return this.http.post(`${this.URL_API}/users/createUser`, user);
  }
  // Read User
  getAllAdmins() {
    return this.http.get<any>(`${this.URL_API}/users/getAllAdmins`);
  }

  getAllDoctors() {
    return this.http.get<any>(`${this.URL_API}/users/getAllDoctors`);
  }

  getAllUsers() {
    return this.http.get<any>(`${this.URL_API}/users/getAllUsers`);
  }
  
  getDoctorsById(_id: any){
    return this.http.get<any>(`${this.URL_API}/users/getUserById/${_id}`);
  }

  getUserById(_id: any) {
    return this.http.get<any>(`${this.URL_API}/users/getUserById/${_id}`);
  }
  // Update user
  updateUser(user: User) {
    console.log(`${this.URL_API}/users/updateUser/${user._id}`, user);
    return this.http.put(`${this.URL_API}/users/updateUser/${user._id}`, user);
  }
  // delete user
  deleteUser(_id: string) {
    console.log(`${this.URL_API}/users/deleteUser/${_id}`);
    return this.http.delete(`${this.URL_API}/users/deleteUser/${_id}`);
  }

  loggedIn() {
    //return !!localStorage.getItem('token')
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
