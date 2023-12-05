import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {



  private apiForCast = 'https://api.open-meteo.com/v1/forecast'
  private apiGeocoding = 'https://geocoding-api.open-meteo.com/v1/search'

  constructor(private http: HttpClient) { }

  getWethear(lat: number, long: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('longitude', long);
    queryParams = queryParams.append('latitude', lat);
    queryParams = queryParams.append('current', 'temperature_2m,apparent_temperature,is_day');
    return this.http.get(this.apiForCast, {
      params: queryParams
    })
  }

  getGeocoding(string: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('name', string);
    queryParams = queryParams.append('count', 1);
    queryParams = queryParams.append('language', 'fr');
    queryParams = queryParams.append('format', 'json');
    return this.http.get(this.apiGeocoding, {
      params: queryParams

    })
  }
}
