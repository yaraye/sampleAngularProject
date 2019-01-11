import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
//when user is distracted from the login so they don't loss there data
import{LocalStorageService} from 'angular-2-local-storage';
import {Constants} from './shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private route: Router, private lStore: LocalStorageService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (state.url === '/login') {
    } else {
      if (this.lStore.get(Constants.USER_LOGGED_IN_KEY)) {
        return true;
      } else {
        this.callLoginPage();
      }
    }
  }

  callLoginPage() {
    // alert('Please login first');
    this.route.navigate(['/login']);
  }
}



