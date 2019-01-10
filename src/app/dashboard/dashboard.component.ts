
import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../services/weather.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cityName: string;
  weatherData : object;
  cityArray: any;

  constructor(private weatherService: WeatherService) { 
    
    this.cityName = 'New York';
    this.cityArray=['washington', 'Maryland', 'Toronto','New York']

  }
    updateWeather() {
      this.weatherService.fetchWeather(this.cityName).subscribe((data) => {
        this.weatherData = data;
      }, (err) => {
        alert('This City name does not exist');
      });
    }
  
    ngOnInit() {
      this.updateWeather();
    }
  
    onNameKey(event:any){
     this.cityName = event.target.value;
  }
  getNewWeather(){
    this.updateWeather();
  
  }
}