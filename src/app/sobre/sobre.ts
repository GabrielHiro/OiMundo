import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sobre',
  imports: [CommonModule, FormsModule],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre 
{
  idade = 21;

  logado = true;

  lista = ['Gabriel', 'Maria', 'João'];
  
  nome = 'Gabriel';

  mostrar = true;
  selecionado = '';

  enviar() {
    alert('Salvo o nome: ' + this.nome);
  }

  adicionarItem(event: any) 
  {
    if (event.target.value.trim() === '') {
      return; // Não adiciona itens vazios
    }
    
    this.lista.push(event.target.value)
    event.target.value = '';
  }
}
