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
    
    const car1: Car = {
      name: "Range Rover Velar",
      tablica: "F0 LAMEL",
      imgUrl: "https://static.autox.com/uploads/2023/07/Land-Rover-Range-Rover-Velar-Fuji-White.jpg",
      isReserveted: false,
      mileage: null
    };
    
    const car2: Car = {
      name: "Skoda SUPERB",
      tablica: "F3 LAMEL",
      imgUrl: "https://www.bristolstreet.co.uk/images/new/vertu/car/skoda/superb/colour-swatches/metallic-moonwhite%5E950x634%5E.jpg",
      isReserveted: false,
      mileage: null
    };
    
    const car3: Car = {
      name: "Citroen Berlingo",
      tablica: "F1 LAMEL",
      imgUrl: "https://www.citroen.com.ge/wp-content/uploads/2015/07/gris_alu_nouveau_berlingo_vu_front.jpg",
      isReserveted: false,
      mileage: null
    };
    
    const car4: Car = {
      name: "Samochód 4",
      tablica: "f3 lamel",
      imgUrl: "https://media1.innovativcar-tech.de/12921-large_default/vw-lupo.jpg",
      isReserveted: false,
      mileage: null
    };
    
    
    // Dodawanie samochodów do tablicy cars
    this.cars.push(car1, car2, car3, car4);
  }
}
