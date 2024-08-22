import {Injectable} from '@angular/core';
import {Car} from "../../data-objects/models/car";
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
  private baseUrl = 'http://localhost:4000/car_service/'; // api path

  constructor(
    private http: HttpClient,
  ) {
  }

  // Method to GET All the cars
  fetchAllCars(): Observable<Car[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<Car[]>(url);
  }

  // Method to GET All the cars
  fetchACar(car: Car): Observable<Car> {
    const url = `${this.baseUrl}${car._id}`;
    return this.http.get<Car>(url);
  }

  // Method to ADD A Car
  postACar(car: Car): Observable<Car> {
    const url = `${this.baseUrl}`; // Your API endpoint
    return this.http.post<Car>(url, car);
  }

  // Method to Delete A Car
  deleteACar(car: Car): Observable<Car> {
    const url = `${this.baseUrl}${car._id}`; // Your API endpoint
    return this.http.delete<Car>(url);
  }

  // Method to Update A Car
  patchACar(car: Car): Observable<Car> {
    const url = `${this.baseUrl}${car._id}`; // Your API endpoint
    // todo -> use dto pattern // dto.service
    // casting
    const newCar: {
      owner: string,
      car_model: string,
      car_numberplate: string,
      job_status: boolean,
      job_progress: number,
    } = {
      owner: car.owner,
      car_model: car.car_model,
      car_numberplate: car.car_numberplate,
      job_status: car.job_status,
      // job_progress: parseInt(this.job_progress),
      job_progress: car.job_progress,
    };

    return this.http.patch<Car>(url, newCar);
  }

}
