import {Routes} from '@angular/router';
import {AboutComponent} from "./views/about/about.component";
import {HomeComponent} from "./views/home/home.component";


export const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
  },
  {
    path: 'about',
    component:AboutComponent
  }
];
