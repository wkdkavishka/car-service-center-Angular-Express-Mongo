import {Injectable, OnInit} from '@angular/core';
import {Car} from '../models/car';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CarService implements OnInit {

  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit(): void {
    // todo -> fetch cars with limit of n
    throw new Error('Method not implemented.');
  }

  // todo -> use .env or sth better
  private baseUrl = 'http://localhost:4000';
  cars: Car[] = []; // and Empty Array of Car  // cars: Array<Car> = [];

  addACar(car: Car): void {
    this.cars.push(car);
    console.log("service --> cars", this.cars); // testing ################
  }

  getAllCars(): Car[] {
    return this.cars;
    //
    // let url = `${this.baseUrl}/car_service/`;
    //
    // return this.http.get<Array<Car>>(url)
  }

  // Method to get cars
  getCars(): Observable<Car[]> {
    const url = `${this.baseUrl}/car_service/`;

    return this.http.get<Car[]>(url); // Using any as the type for simplicity, change it as needed
  }

  deleteACar(car: Car): void {
    this.cars.splice(this.cars.indexOf(car), 1);
  }

}
