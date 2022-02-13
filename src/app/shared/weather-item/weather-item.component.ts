import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Weather } from '../model/weather.model';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {
  public data!: Weather;
  @Input() city!: string;
  list: any[] = [];

  
 
  constructor(private weatherService: WeatherService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.city) {
       this.getWeatherDay();
    }
 }

  ngOnInit(): void {
  }
  getWeatherDay(): void{
    this.weatherService.getWeather(this.city).subscribe((data: Weather)=>{
      this.data = data;
      this.list = this.data.list.filter(weather => weather.dt_txt.indexOf("15:00") > 0);
      console.log(this.list);
    })
  }
  getUrlForImg(icon: string): string {
    return `https://openweathermap.org/img/w/${icon}.png`;
 }
 getMathRound(temp: number): number{
  return Math.round(temp);
}
// getWeekDay(dt_txt: string): string{
//   this.weatherService.getWeather(this.city).subscribe((data: Weather)=>{
//     this.data = data;
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   return days[data.dt_txt:getDay()];
// })}
}

