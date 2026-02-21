import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService, Evento } from '../../services/api.service';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule, DatePipe, FormsModule, RouterLink],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo implements OnInit {
  eventos = signal<Evento[]>([]);
  busca = '';
  categoriaFiltro = '';
  ordem = 'desc';

  categorias = ['', 'Tecnologia', 'Esportes', 'Música', 'Educação', 'Negócios', 'Outros'];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {
    this.api
      .listarEventos({
        busca: this.busca || undefined,
        categoria: this.categoriaFiltro || undefined,
        ordem: this.ordem,
      })
      .subscribe((data) => this.eventos.set(data));
  }
}
