import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService, Evento } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-meus-eventos',
  imports: [CommonModule, RouterLink],
  templateUrl: './meus-eventos.html',
  styleUrl: './meus-eventos.css',
})
export class MeusEventos implements OnInit {
  eventos: Evento[] = [];

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    const id = this.auth.usuario()?._id;
    if (!id) return;
    this.api.eventosDoOrganizador(id).subscribe((data) => (this.eventos = data));
  }

  status(ev: Evento): string {
    const agora = new Date();
    const data = new Date(ev.dataHora);
    if (data > agora) return 'Futuro';
    // considera "ocorrendo" se for no mesmo dia
    if (data.toDateString() === agora.toDateString()) return 'Ocorrendo';
    return 'Finalizado';
  }

  excluir(id: string) {
    if (!confirm('Tem certeza que deseja excluir este evento?')) return;
    this.api.excluirEvento(id).subscribe({
      next: () => this.carregar(),
      error: (err) => alert(err.error?.error || 'Erro ao excluir'),
    });
  }
}
