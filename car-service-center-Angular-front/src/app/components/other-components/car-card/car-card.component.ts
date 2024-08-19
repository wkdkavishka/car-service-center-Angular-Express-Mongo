import {Component, Input} from '@angular/core';
import {CarService} from "../../../services/car.service";
import {Car} from "../../../models/car";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {

  @Input()
  givenCar!: Car; // The selected car from all-cars component

  selectedTab: string = "stats"; // default tab

  constructor(private carService: CarService) {
  }

  onDelete() {
    this.carService.deleteACar(this.givenCar).then();
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  selectTabMobile(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedTab = target.value;
  }
}
