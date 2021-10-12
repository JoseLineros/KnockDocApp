import { ElementRef, Injectable, Renderer2, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/Auth';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { style } from 'd3-selection';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @ViewChild('asDarkMode') darkMode: ElementRef | undefined;

  selectedAuth: Auth;
  auth: Auth[] = [];
  readonly URL_API = 'http://localhost:5000';

  constructor(private http: HttpClient, private router: Router) {
    this.selectedAuth = new Auth();
  }

  //Signup
  signup(userCreated: Auth) {
    console.log(`${this.URL_API}/auth/signup`);
    return this.http.post(`${this.URL_API}/auth/signup`, userCreated);
  }

  signin(userLogged: Auth) {
    console.log(`${this.URL_API}/auth/signin`);
    return this.http.post<any>(`${this.URL_API}/auth/signin`, userLogged);
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

  // check() {
  //   if (localStorage.getItem('token')) {
  //     let tokenActual: any = localStorage.getItem('token');
  //     let decoded: any = jwt_decode(tokenActual);
  //     return decoded.role;
  //   }
  // }

  checkToken(): any {
    if (localStorage.getItem('token')) {
      let tokenActual: any = localStorage.getItem('token');
      let decoded: any = jwt_decode(tokenActual);
      return { role: decoded.role, email: decoded.email };
    }
  }

  modeDark(e: any) {
    console.log(e);
    const asDarkMode = this.darkMode?.nativeElement;
    console.log(asDarkMode);
    // this.renderer2.setStyle(asDarkMode, 'color', 'red');
  }
}
