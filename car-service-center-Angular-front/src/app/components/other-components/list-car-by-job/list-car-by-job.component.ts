import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {Car} from "../../../data-objects/models/car";
import {FormBuilder, FormsModule} from "@angular/forms";
import {CarService} from "../../../services/car.service";

@Component({
  selector: 'app-list-car-by-job',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FormsModule,
    NgStyle
  ],
  templateUrl: './list-car-by-job.component.html',
  styleUrl: './list-car-by-job.component.scss'
})
export class ListCarByJobComponent implements OnInit {

  @Output()
  returnCar: EventEmitter<Car> = new EventEmitter<Car>();

  cars: Car[] = [];
  found_cars: Car[] = []; // to temporary hold
  // for data binding
  job_progress: number = -1 //
  isProgressDropdownOpen = false; //
  isStatusDropdownOpen = false;
  car_numberplate: string = '';
  job_status: boolean = false;


  constructor(
    private carService: CarService,
  ) {

  }

  ngOnInit(): void {
    this.carService.AllCars().then((r) => this.cars = r)
      .catch((err) => console.log(err));
  }

  toggleDropdownProgress() {
    this.isProgressDropdownOpen = !this.isProgressDropdownOpen;
  }

  setJobProgress(progress: number): void {
    this.job_progress = progress;
    this.isProgressDropdownOpen = false; // Close the dropdown after selection
    console.log('Selected Job Progress:', this.job_progress); // Handle the status as needed
  }

  onFind(): void {
    this.found_cars = [];
    this.cars.forEach((car: Car) => {
      if (this.job_progress) {
        if (this.job_progress === car.job_progress) {
          this.found_cars.push(car);
        }
      }
      if (this.car_numberplate) {
        if (this.car_numberplate === car.car_numberplate) {
          this.found_cars.push(car);
        }
      }
      if (this.job_status) {
        if (this.job_status === car.job_status) {
          this.found_cars.push(car);
        }
      }

      this.found_cars = this.carService.findAndRemoveDuplicateCars(this.found_cars);

    })
  }

  refresh() {
    this.onFind();
  }

  selectReturnCar(car: Car): void {
    this.returnCar.emit(car); // Emit the selected car
  }

  setJobStatus(b: boolean) {
      this.job_status = b;
      this.isStatusDropdownOpen = false;
  }

  toggleDropdownStatus() {
    this.isStatusDropdownOpen = !this.isStatusDropdownOpen;
  }
}
