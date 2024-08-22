import {Component, OnInit} from '@angular/core';
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

  // for data binding
  job_progress: number = -1 //
  isProgressDropdownOpen = false; //

  cars: Car[] = [];
  t_cars: Car[] = []; // to temporary hold

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
    this.t_cars =[];
    this.cars.forEach((car: Car) => {
      if (this.job_progress === car.job_progress) {
        this.t_cars.push(car);
      }
    })
  }

  refresh() {
    this.onFind();
  }

  selectCar(car: Car) {

  }
}
