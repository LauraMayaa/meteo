import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  WeatherData: any;
  postalcode: string = "";
  resultGeocoding: any;
  resultForCast: any;

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
    console.log('hello')


  }

  onSubmit() {
    // this.getWeatherData();
    this.weather.getGeocoding(this.postalcode).subscribe((r) => {
      this.resultGeocoding = r
      console.log(this.resultGeocoding)
      this.getWeatherData(this.resultGeocoding.results[0].latitude, this.resultGeocoding.results[0].longitude)
    })


  }

  getWeatherData(lat: number, long: number) {

    this.weather.getWethear(lat, long).subscribe(r => {

      this.resultForCast = r;
    })
  }

}

