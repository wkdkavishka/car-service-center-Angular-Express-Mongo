import {Component, Input} from '@angular/core';
import {CarService} from "../../../services/car.service";
import {Car} from "../../../models/car";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {

  @Input()
  givenCar!: Car; // The selected car from all-cars component

  constructor(private carService: CarService) {

  }

  onDelete() {
    this.carService.deleteACar(this.givenCar).then( );
  }

  // @Output()
  // d_index: EventEmitter<number> = new EventEmitter<number>();
}
