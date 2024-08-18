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
    console.log(this.carService.getCars());
  }

  ngOnInit(): void {
    this.fetchOnLoad();
  }

  fetchOnLoad(): void {
    this.carService.getCars().subscribe({
      next: (response) => {
        // console.log(data); // Logs the fetched data to the console
        this.cars = response;
      },
      error: (err) => {
        console.error('Error fetching cars:', err); // Logs any errors
      },
    });
  }

}
