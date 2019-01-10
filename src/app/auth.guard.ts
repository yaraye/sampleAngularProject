import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
//when user is distracted from the login so they don't loss there data
import{LocalStorageService} from 'angular-2-local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private route: Router, private lStore: LocalStorageService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log(this.lStore.get('isUserLoggedIn'));
      if (this.lStore.get('isUserLoggedIn')){
        return true;
      }else {
        this.callLoginPage();
      }
  }
  //redirect to login page
  callLoginPage(){
    alert('please login first');
    this.route.navigate['/login'];
  }
}
