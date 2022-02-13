import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../model/weather.model';

const WEATHER_KEY = "88167022d5d42948117b1b43909a57c3";
const WEATHER_API = "http://api.openweathermap.org/data/2.5/forecast"

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<Weather>{
    return this.http.get<Weather>(`${WEATHER_API}?q=${city}&units=metric&appid=${WEATHER_KEY}`);
  }
  getWeatherDay(){
    
  }
}
