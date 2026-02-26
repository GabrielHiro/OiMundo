import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { MeusEventos } from './organizador/meus-eventos/meus-eventos';
import { FormEvento } from './organizador/form-evento/form-evento';
import { Inscritos } from './organizador/inscritos/inscritos';
import { Catalogo } from './participante/catalogo/catalogo';
import { EventoDetalhe } from './participante/evento-detalhe/evento-detalhe';
import { MinhasInscricoes } from './participante/minhas-inscricoes/minhas-inscricoes';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },

  // organizador
  { path: 'meus-eventos', component: MeusEventos },
  { path: 'criar-evento', component: FormEvento },
  { path: 'editar-evento/:id', component: FormEvento },
  { path: 'inscritos/:eventoId', component: Inscritos },

  // participante
  { path: 'catalogo', component: Catalogo },
  { path: 'evento/:id', component: EventoDetalhe },
  { path: 'minhas-inscricoes', component: MinhasInscricoes },
];