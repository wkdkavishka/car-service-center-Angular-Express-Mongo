import {Component, Input} from '@angular/core';
import {CarService} from "../../../services/car.service";
import {Car} from "../../../models/car";

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss'
})
export class CarDetailsComponent {

  constructor(private carService: CarService) {

  }

  @Input()
  car!: Car;

  onDelete() {
    this.carService.deleteACar(this.car);
  }

  // @Output()
  // d_index: EventEmitter<number> = new EventEmitter<number>();
}
