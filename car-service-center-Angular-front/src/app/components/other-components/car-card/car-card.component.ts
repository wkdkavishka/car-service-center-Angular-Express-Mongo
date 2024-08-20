import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {CarService} from "../../../services/car.service";
import {Car} from "../../../data-objects/models/car";
import {NgClass, NgIf, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgStyle,
    FormsModule
  ],
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {

  @ViewChild('jobStatus') carInput!: ElementRef;

  @Input()
  givenCar!: Car; // The selected car from all-cars component

  // for two-way binding
  owner: string = '';
  car_model: string = '';
  car_numberplate: string = '';
  _id: string = '';
  job_status: string = '';
  job_progress: string = '';

  selectedTab: string = "stats"; // default tab

  constructor(
    private carService: CarService
  ) {
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  selectTabMobile(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedTab = target.value;
  }

  onDelete(car: Car) {
    this.carService.deleteACar(car).then(
      (r) => this.carService.findAndDelete(r)
    ).catch(err => console.log(err));
  }

  onUpdate() {
    // Create a tempCar object
    const newCar: {
      // todo -> fix this messy update // stop replacing
      owner: string,
      car_model: string,
      car_numberplate: string,
      job_status: string,
      job_progress: string
    } = {
      owner: this.givenCar.owner,
      car_model: this.givenCar.car_model,
      car_numberplate: this.givenCar.car_numberplate,
      job_status: this.job_status,
      // job_progress: parseInt(this.job_progress),
      job_progress: this.job_progress,
    };


    // // Create a newCar object
    // const newCar: Car = {
    //   owner: this.owner,
    //   car_model: this.car_model,
    //   car_numberplate: this.car_numberplate,
    //   job_status: this.job_status, // by default
    //   job_progress: this.job_progress, // by default
    //   // _id
    //   _id: this._id
    // };

    // this.cars seems to be sync with carService's cars list
    // add car to the service
    this.carService.updateACar(newCar).then();

    // clear fields after submit
    this.owner = '';
    this.car_model = '';
    this.car_numberplate = '';
    this.job_status = '';
    this.job_progress = '';
    // Set focus to the input element
    this.carInput.nativeElement.focus();
  }

}
