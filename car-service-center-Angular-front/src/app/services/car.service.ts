import {Injectable} from '@angular/core';
import {Car} from '../models/car';
import {firstValueFrom} from "rxjs";
import {ApiService} from "./api/api.service";

@Injectable({
  providedIn: 'root'
})

export class CarService {

  fetched: boolean = false;
  cars: Car[] = []; // and Empty Array of Car  // cars: Array<Car> = [];

  constructor(
    private apiService: ApiService
  ) {
    this.initialize().then(
      () => console.log("Car service initialized")
    );
  }

  // todo -> implement -> fetch cars with limit of n
  // Method to initialize or refresh data
  private async initialize(): Promise<void> {
    try {
      this.cars = await firstValueFrom(this.apiService.fetchAllCars());
      this.fetched = true;
    } catch (error) {
      console.error('Error initialize cars:', error);
      throw error;
    }
  }

  async AllCars(): Promise<Car[]> {
    if (this.fetched) {
      return this.cars;
    } else {
      try {
        return this.cars = await firstValueFrom(this.apiService.fetchAllCars());
      } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
      }
    }
  }

  // Refresh cars and wait until the data is fetched
  async refreshCarList(): Promise<Car[]> {
    try {
      // Fetch the cars and wait for the data to be resolved
      this.cars = await firstValueFrom(this.apiService.fetchAllCars());
      return this.cars;
    } catch (error) {
      console.error('Error refreshCarList :', error);
      throw error;
    }
  }

  async addACar(car: Car): Promise<Car> {
    try {
      // ADD and return the car
      const response = await firstValueFrom(this.apiService.postACar(car));
      console.log('Car added successfully:', response);
      this.cars.push(response); // updating the local car list
      return response;
    } catch (error) {
      console.error('Error Adding car:', error);
      throw error;
    }
  }


  deleteACar(car: Car): void {
    this.cars.splice(this.cars.indexOf(car), 1);
  }

}
