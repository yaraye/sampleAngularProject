import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from './shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  // Check if a username & password exists for the user
  login(username, password) {
    //this returns a promise
    return this.httpClient.post(Constants.API_ENDPOINT +'login', {'email' : username, 'password': password});
  }
}
