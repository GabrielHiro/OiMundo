import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Evento } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-evento-detalhe',
  imports: [CommonModule],
  templateUrl: './evento-detalhe.html',
  styleUrl: './evento-detalhe.css',
})
export class EventoDetalhe implements OnInit {
  evento: Evento | null = null;
  mensagem = '';
  erro = '';

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.api.eventoDetalhe(id).subscribe((ev) => (this.evento = ev));
  }

  inscrever() {
    if (!this.evento?._id) return;
    const userId = this.auth.usuario()?._id;
    if (!userId) return;

    this.mensagem = '';
    this.erro = '';
    this.api.inscrever(this.evento._id, userId).subscribe({
      next: () => (this.mensagem = 'Inscrição realizada com sucesso!'),
      error: (err) => (this.erro = err.error?.error || 'Erro ao se inscrever'),
    });
  }

  vagasDisponiveis(): number {
    if (!this.evento) return 0;
    return this.evento.vagas - (this.evento.totalInscritos || 0);
  }
}
