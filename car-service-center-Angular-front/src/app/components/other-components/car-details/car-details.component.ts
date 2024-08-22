import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {CarService} from "../../../services/car.service";
import {Car} from "../../../data-objects/models/car";
import {NgClass, NgIf, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgStyle,
    FormsModule
  ],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss'
})
export class CarDetailsComponent implements OnInit {

  // @ViewChild('jobStatus') carInput!: ElementRef;

  @Input()
  givenCar!: Car; // The selected car from all-cars component

  // for data binding
  isStatusDropdownOpen = false; //
  isProgressDropdownOpen = false; //
  // carGiven: boolean = false;
  selectedTab: string = "stats"; // default tab

  constructor(
    private carService: CarService
  ) {
  }

  ngOnInit(): void {
    // Check if givenCar is undefined or null and set default values
    if (!this.givenCar) {
      this.givenCar = {
        owner: 'Default Owner',
        car_model: 'Default Model',
        car_numberplate: 'XXX-0000',
        _id: '-1',
        job_status: false, // Default to false (e.g., closed)
        job_progress: 0 // Default to 0 (e.g., no progress)
      };
    }
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['givenCar'] && this.givenCar) {
  //     // If givenCar is assigned or changed, set carGiven to true
  //     this.carGiven = true;
  //   }
  // }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  selectTabMobile(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedTab = target.value;
  }

  onDelete() {
    this.carService.deleteACar(this.givenCar).then();
  }

  onUpdate() {
    // todo -> fix this messy update // stop replacing
    // Create a newCar object
    const newCar: Car = {// _id
      _id: this.givenCar._id,
      owner: this.givenCar.owner,
      car_model: this.givenCar.car_model,
      car_numberplate: this.givenCar.car_numberplate,
      job_status: this.givenCar.job_status, // by default
      job_progress: this.givenCar.job_progress, // by default
    };

    // add car to the service // this.cars seems to be sync with carService's cars listv
    this.carService.updateACar(newCar).then((r) => {
        // update this given car
        this.givenCar.job_status = r.job_status;
        this.givenCar.job_progress = r.job_progress;
      }
    ).catch((err) => {
      console.log(err)
    });

    // clear fields after submit

    // Set focus to the input element
    // this.carInput.nativeElement.focus();
  }

  toggleDropdownStatus(): void {
    this.isStatusDropdownOpen = !this.isStatusDropdownOpen;
  }

  setJobStatus(status: boolean): void {
    this.givenCar.job_status = status;
    this.isStatusDropdownOpen = false; // Close the dropdown after selection
    console.log('Selected Job Status:', this.givenCar.job_status); // Handle the status as needed
  }

  toggleDropdownProgress() {
    this.isProgressDropdownOpen = !this.isProgressDropdownOpen;
  }

  setJobProgress(progress: number): void {
    this.givenCar.job_progress = progress;
    this.isProgressDropdownOpen = false; // Close the dropdown after selection
    console.log('Selected Job Progress:', this.givenCar.job_progress); // Handle the status as needed
  }

}
