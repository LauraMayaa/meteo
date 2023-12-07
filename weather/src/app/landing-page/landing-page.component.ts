import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit, AfterViewInit {

  WeatherData: any;
  postalcode: string = "";
  resultGeocoding: any;
  resultForCast: any;

  constructor(private weather: WeatherService) { }

  private map: any;

  ngOnInit(): void {
    console.log('hello')



  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }



  ngAfterViewInit(): void {
    this.initMap();
  }



  onSubmit() {


    // this.getWeatherData();
    this.weather.getGeocoding(this.postalcode).subscribe((r) => {
      this.resultGeocoding = r
      this.resultGeocoding = this.resultGeocoding.results[0]
      console.log(this.resultGeocoding)
      L.marker([this.resultGeocoding.latitude, this.resultGeocoding.longitude]).addTo(this.map);
      this.map.setView([this.resultGeocoding.latitude, this.resultGeocoding.longitude], 15);
      this.getWeatherData(this.resultGeocoding.latitude, this.resultGeocoding.longitude)
    })


  }

  getWeatherData(lat: number, long: number) {

    this.weather.getWethear(lat, long).subscribe(r => {

      this.resultForCast = r;

      console.log(r)
    })
  }



}

