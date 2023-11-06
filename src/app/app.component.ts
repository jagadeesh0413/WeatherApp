import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  weatherData: any; // Define a property to store the fetched weather data
  city: string='bengaluru';

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeatherData(this.city); 
    this.city = ''; 
  }

  onSubmit(formValue: any) {
    const city=formValue.city;
    if (this.city !== undefined) {
      this.getWeatherData(city);
      this.city = ''; 
    }
  } 
  getWeatherData(city: string) {
    this.weatherService.getWeatherData(city).subscribe(
      (data: any) => {
        this.weatherData = data;
        console.log('Weather Data:', this.weatherData);
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
