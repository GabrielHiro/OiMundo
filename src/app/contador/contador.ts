import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  contador = 0;

  incrementa() {
    this.contador++;
  }

  decrementa() {
    this.contador--;
  }
}
