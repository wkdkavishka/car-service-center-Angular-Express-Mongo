import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.scss'
})

export class AddCarComponent implements OnInit {
  ngOnInit() {
    // Set focus on the input element when the component is initialized
    setTimeout(() => {
      this.carInput.nativeElement.focus();
    }, 0); // delay of 0 ms
  }

  @ViewChild('carInput') carInput!: ElementRef;

  car_brand: string = '';
  car_model: string = '';
  car_numberplate: string = '';

  cars: Array<{ brand: string; model: string; numberplate: string }> = [];

  onSubmit() {
    // add car to cars-array
    this.cars.push({
      brand: this.car_brand,
      model: this.car_model,
      numberplate: this.car_numberplate,
    });
    // clear fields after submit
    this.car_brand = '';
    this.car_model = '';
    this.car_numberplate = '';
    // Set focus to the input element
    this.carInput.nativeElement.focus();
  }

}
