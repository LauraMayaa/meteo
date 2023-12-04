import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'; // Remplacez par votre clé API OpenWeatherMap
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(postalCode: string): Observable<any> {
    const params = {
      zip: postalCode,
      appid: this.apiKey
    };

    return this.http.get(this.apiUrl, { params });
  }
}
