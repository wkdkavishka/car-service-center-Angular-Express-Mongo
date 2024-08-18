import {Injectable} from '@angular/core';
import {Car} from '../models/car';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CarService {

  // todo -> use .env or sth better
  private baseUrl = 'http://localhost:4000';

  fetched: boolean = false;
  cars: Car[] = []; // and Empty Array of Car  // cars: Array<Car> = [];

  constructor(
    private http: HttpClient,
  ) {
    this.initialize().then(
      () => console.log("Car service initialized")
    );
  }

  // todo -> implement -> fetch cars with limit of n
  // Method to initialize or refresh data
  private async initialize(): Promise<void> {
    try {
      this.cars = await firstValueFrom(this.fetchAllCars());
      this.fetched = true;
    } catch (error) {
      console.error('Error fetching cars:', error);
      throw error;
    }
  }

  // Method to fetch All the cars
  private fetchAllCars(): Observable<Car[]> {
    const url = `${this.baseUrl}/car_service/`;
    return this.http.get<Car[]>(url);
  }

  async addACar(car: Car): Promise<void> {
    this.cars.push(car);
    console.log("service --> cars", this.cars); // testing ################
  }

  async getAllCars(): Promise<Car[]> {
    if (this.fetched) {
      return this.cars;
    } else {
      try {
        return this.cars = await firstValueFrom(this.fetchAllCars());
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
      this.cars = await firstValueFrom(this.fetchAllCars());
      return this.cars;
    } catch (error) {
      console.error('Error fetching cars:', error);
      throw error;
    }
  }

  deleteACar(car: Car): void {
    this.cars.splice(this.cars.indexOf(car), 1);
  }

}
