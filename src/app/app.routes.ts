import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Contador } from './contador/contador';
import { Types } from './types/types';
import { ListaProduto } from './lista-produto/lista-produto';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'contador', component: Contador },
  { path: 'types', component: Types },
  { path: 'produtos', component: ListaProduto }
];