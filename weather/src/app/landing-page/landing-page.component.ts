import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  //  propriété pour stocker la valeur du code postal 
  postalCode: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  onSubmit() {
    if (this.postalCode.trim() !== '') {
      this.weatherService.getWeather(this.postalCode).subscribe(
        (data) => {
          this.weatherData = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération des données de météo :', error);
        }
      );
    }
  }
}
