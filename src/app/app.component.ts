import { Component, Input } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-app';
 isUserLoggedIn: boolean;

 constructor(private router:Router) {
   if (this.isUserLoggedIn = true){
    this.router.navigate(['./login'])

   }else 
     this.router.navigate(['./'])
  
}
}
