import { Component } from '@angular/core';
import {AddCarComponent} from "../../components/other-components/add-car/add-car.component";
import {AllCarsComponent} from "../../components/other-components/all-cars/all-cars.component";
import {CarDetailsComponent} from "../../components/other-components/car-details/car-details.component";
import {Car} from "../../data-objects/models/car";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AddCarComponent,
    AllCarsComponent,
    CarDetailsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  selectedCar!: Car;

  onCarSelect(car: Car) : void{
    this.selectedCar = car;
  }
}
