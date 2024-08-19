import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";
import {CarService} from "../../../services/car.service";
import {Car} from "../../../models/car";

@Component({
  selector: 'app-all-cars',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle
  ],
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.scss'
})
export class AllCarsComponent implements OnInit {

  @Output()
  returnCar: EventEmitter<Car> = new EventEmitter<Car>();

  cars: Car[] = [];
  // todo -> transform cars<array> to hashMaps

  // hashMapCars = new Map<string, Car>();

  constructor(
    private carService: CarService
  ) {
  }

  private findAndDelete(car: Car, cars: Car[]) {
    for (let i = 0; i < cars.length; i++) {
      if (car._id == cars[i]._id) {
        cars.splice(i, 1);
        break;
      }
    }
  }

  ngOnInit(): void {
    this.carService.AllCars().then((r) => this.cars = r)
      .catch((err) => console.log(err));
  }

  refresh() {
    this.carService.refreshCarList().then((r) => this.cars = r)
      .catch((err) => console.log(err));
  }

  onDelete(car: Car) {
    this.carService.deleteACar(car).then(
      (r) => this.findAndDelete(r, this.cars)
    ).catch(err => console.log(err));
  }

  selectCar(car: Car): void {
    this.returnCar.emit(car); // Emit the selected car
  }

}
