import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Inscricao } from '../../services/api.service';

@Component({
  selector: 'app-inscritos',
  imports: [CommonModule, DatePipe],
  templateUrl: './inscritos.html',
  styleUrl: './inscritos.css',
})
export class Inscritos implements OnInit {
  inscricoes = signal<Inscricao[]>([]);
  eventoId = '';

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.eventoId = this.route.snapshot.paramMap.get('eventoId') || '';
    this.api.inscritosDoEvento(this.eventoId).subscribe((data) => this.inscricoes.set(data));
  }
}
