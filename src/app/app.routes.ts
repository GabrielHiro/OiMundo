import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Contador } from './contador/contador';
import { Types } from './types/types';
import { ListaProduto } from './lista-produto/lista-produto';
import { ContadorA } from './contador-a/contador-a';
import { ContadorB } from './contador-b/contador-b';
import { Alunos } from './alunos/alunos';
 
export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'sobre', component: Sobre },
    { path: 'contador', component: Contador },
    { path: 'types', component: Types },
    { path: 'produtos', component: ListaProduto },
    { path: 'contadora', component: ContadorA },
    { path: 'contadorb', component: ContadorB },
    { path: 'alunos', component: Alunos },
];