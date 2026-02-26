import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Evento } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-evento-detalhe',
  imports: [CommonModule, DatePipe],
  templateUrl: './evento-detalhe.html',
  styleUrl: './evento-detalhe.css',
})
export class EventoDetalhe implements OnInit {
  evento = signal<Evento | null>(null);
  mensagem = signal('');
  erro = signal('');

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.api.eventoDetalhe(id).subscribe((ev) => this.evento.set(ev));
  }

  inscrever() {
    const ev = this.evento();
    if (!ev?._id) return;
    const userId = this.auth.usuario()?._id;
    if (!userId) return;

    this.mensagem.set('');
    this.erro.set('');
    this.api.inscrever(ev._id, userId).subscribe({
      next: () => this.mensagem.set('Inscrição realizada com sucesso!'),
      error: (err) => this.erro.set(err.error?.error || 'Erro ao se inscrever'),
    });
  }

  vagasDisponiveis(): number {
    const ev = this.evento();
    if (!ev) return 0;
    return ev.vagas - (ev.totalInscritos || 0);
  }
}
