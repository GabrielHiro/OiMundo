import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContadorService {
  valor = 0;
  incrementa() {
    this.valor++;
  }
  decrementa() {
    this.valor--;
  } 
}
