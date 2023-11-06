import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService
 {
  constructor(private http:HttpClient) { }
  getWeatherData(city: string): Observable<any> {
    const url=`api-key`;
    return this.http.get(url);
  }
  
  
}
