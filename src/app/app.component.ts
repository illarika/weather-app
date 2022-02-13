import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'weather-app';
  city!: string;
searchCity!: string;

   oneDayWeather!: boolean;
   weakWeather!: boolean;

   getWeather(): void {
      this.oneDayWeather = true;
      this.weakWeather = false;
      this.city = this.searchCity;
   }

   getWeatherDay(): void {
      this.oneDayWeather = false;
      this.weakWeather = true;
      this.city = this.searchCity;
   }
}

