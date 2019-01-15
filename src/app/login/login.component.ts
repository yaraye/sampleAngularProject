import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
// import { Subscriber } from 'rxjs';
import {Router} from '@angular/router';
// import { Command } from 'protractor';
import{LocalStorageService} from 'angular-2-local-storage';
import {Constants} from '../shared/constants'

//component decorator
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//component logic
export class LoginComponent implements OnInit {

  user: object;

  constructor(
    private authService: AuthenticationService, private router: Router, private lStorage:LocalStorageService) {
    this.user = {
      'email': '',
      'password': ''
    }
  }

  ngOnInit() {
    
  }

  handleLogin() {
    // console.log(this.user);
    this.router.navigate(['./'])
    this.authService.login(this.user['email'], this.user['password']).subscribe((data)=>{ 
      // console.log(data);
      // alert('correct response')

      this.lStorage.add(Constants.USER_LOGGED_IN_KEY,true);
      // this.lStorage.add('USER_LOGGED_IN_KEY', true);
      this.router.navigate(['/'])
    }, (err) => {
      console.log(err);
      alert('try again')
    });
  }


}
