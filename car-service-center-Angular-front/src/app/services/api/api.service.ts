import {Injectable} from '@angular/core';
import {Car} from "../../models/car";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /*
  This Service is only to Communicate with the API of car-service express back
   */

  // todo -> use .env or sth better
  private baseUrl = 'http://localhost:4000'; // api path

  constructor(
    private http: HttpClient,
  ) {
  }

  // Method to GET All the cars
  fetchAllCars(): Observable<Car[]> {
    const url = `${this.baseUrl}/car_service/`;
    return this.http.get<Car[]>(url);
  }

  // Method to GET All the cars
  fetchACar(car: Car): Observable<Car> {
    const url = `${this.baseUrl}/car_service/${car._id}`;
    return this.http.get<Car>(url);
  }

  // Method to ADD A Car
  postACar(car: Car): Observable<Car> {
    const url = `${this.baseUrl}/car_service/`; // Your API endpoint
    return this.http.post<Car>(url, car);
  }

  // Method to Delete A Car
  deleteACar(car: Car): Observable<Car> {
    const url = `${this.baseUrl}/car_service/${car._id}`; // Your API endpoint
    return this.http.delete<Car>(url);
  }
}
