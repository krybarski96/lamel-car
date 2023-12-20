import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Car } from './models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lamel-car';
  cars: Car[] = [];

  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
    
    for (let i = 1; i <= 25; i++) {
      const car: Car = {
        name: "Samochód " + i,
        tablica: "f3 lamel",
        imgUrl: "https://static.autox.com/uploads/2023/07/Land-Rover-Range-Rover-Velar-Fuji-White.jpg",
        isReserveted: true,
        mileage: null
      };
      this.cars.push(car);
    }
  }
}
