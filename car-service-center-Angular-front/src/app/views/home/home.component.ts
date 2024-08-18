import { Component } from '@angular/core';
import {AddCarComponent} from "../../components/other-components/add-car/add-car.component";
import {RouterOutlet} from "@angular/router";
import {AllCarsComponent} from "../../components/other-components/all-cars/all-cars.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AddCarComponent,
    RouterOutlet,
    AllCarsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
