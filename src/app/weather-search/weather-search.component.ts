import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Weather } from '../shared/model/weather.model';
import { WeatherService } from '../shared/service/weather.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {
  list: any[] = [];
  public data!: Weather;
  public metric!: string;
  @Input()city!: string;

  @Output() onWeatherSearch: EventEmitter<Weather> = new EventEmitter();
  

  constructor(private weatherService: WeatherService ) { }
  ngOnChanges(changes: SimpleChanges) {
    if (this.city) {
       this.getWeather();
    }
 }

  ngOnInit(): void {
  }

  getWeather(): void{
    this.weatherService.getWeather(this.city).subscribe((data: Weather)=>{
     
      for(let i= 1; i<=7; i++){
        this.list.push(data.list[i]);
      }
      this.data = data;
      console.log(data);

    })
  }
  getUrlForImg(icon: string): string {
    return `https://openweathermap.org/img/w/${icon}.png`;
 }
 
getMathRound(temp: number): number{
    return Math.round(temp);
}
}

