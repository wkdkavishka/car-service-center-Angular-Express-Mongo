import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss'
})
export class CarDetailsComponent {

  @Input()
  car!: { brand: string; model: string; numberplate: string };
  @Input()
  index: number = -1; // to be safe initialized to -1

  onDelete() {
    this.d_index.emit(this.index);
  }

  @Output()
  d_index: EventEmitter<number> = new EventEmitter<number>();
}
