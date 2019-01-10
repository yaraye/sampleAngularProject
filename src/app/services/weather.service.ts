import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  fetchWeather(cityName) {
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=' 
    + cityName + '&APPID=32527174625547dfc7695f0f0013a2ac')
  };
  

}

