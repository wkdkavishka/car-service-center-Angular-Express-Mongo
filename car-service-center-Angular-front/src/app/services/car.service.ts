import {Injectable} from '@angular/core';
import {Car} from '../models/car';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  constructor() {
  }

  // cars: Array<{ brand: string; model: string; numberplate: string }> = [];
  cars: Car[] = []; // and Empty Array of Car

  addACar(car: Car): void {
    this.cars.push(car);
    console.log("service --> cars",this.cars); // testing ################
  }

  getAllCars(): Car[] {
    return this.cars;
  }

}
