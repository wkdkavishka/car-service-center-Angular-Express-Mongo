import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CarService} from "../../../services/car.service";
import {Car} from "../../../models/car";

@Component({
  selector: 'app-all-cars',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.scss'
})
export class AllCarsComponent implements OnInit {

  cars: Car[] = [];

  constructor(
    private carService: CarService
  ) {
  }

  ngOnInit(): void {
    this.carService.getAllCars().then((r) => this.cars = r);
  }

  refresh() {
    this.carService.refreshCarList().then((r) => this.cars = r);
  }

  onDelete(car: Car) {
    this.carService.deleteACar(car);
  }
}
