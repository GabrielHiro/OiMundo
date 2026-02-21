import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Sobre } from './sobre/sobre';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'sobre', component: Sobre }
];