import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public userService: AuthService,
    public router: Router
    ){}

  canActivate(): boolean{
    if(this.userService.loggedIn()){
      return true
    } else {
      this.router.navigate(['/signin'])
      return false
    }
  }

}
