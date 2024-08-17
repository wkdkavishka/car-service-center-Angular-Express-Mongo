import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {CarDetailsComponent} from "../car-details/car-details.component";
import {CarService} from "../../../services/car.service";
import {Car} from "../../../models/car";

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    CarDetailsComponent
  ],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.scss'
})

export class AddCarComponent implements OnInit {

  @ViewChild('carInput') carInput!: ElementRef;

    // for two-way binding
  car_brand: string = '';
  car_model: string = '';
  car_numberplate: string = '';

  // cars: Array<{ brand: string; model: string; numberplate: string }> = [];
  cars: Car[] = [];

  ngOnInit() {
    // Set focus on the input element when the component is initialized
    setTimeout(() => {
      this.carInput.nativeElement.focus();
    }, 0); // delay of 0 ms
  }

  constructor(
    private carService: CarService // service injector
  ) {
    this.cars = this.carService.getAllCars();
    // console.log("constructor called"); // testing ################

  }

  onSubmit() {
    // Create a newCar object
    const newCar: Car = {
      car_brand: this.car_brand,
      car_model: this.car_model,
      car_numberplate: this.car_numberplate,
    };

    // this.cars seems to be sync with carService's cars list
    // add car to the service
    this.carService.addACar(newCar);
    console.log("component --> cars",this.cars); // testing ################


    // clear fields after submit
    this.car_brand = '';
    this.car_model = '';
    this.car_numberplate = '';
    // Set focus to the input element
    this.carInput.nativeElement.focus();
  }

  // deleteCar(index: number) {
  //   this.cars.splice(index, 1);
  // }

  onDelete(car: Car): void {
    this.carService.deleteACar(car)
  }
}
