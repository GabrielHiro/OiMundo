import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService, Inscricao } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-minhas-inscricoes',
  imports: [CommonModule, DatePipe, RouterLink],
  templateUrl: './minhas-inscricoes.html',
  styleUrl: './minhas-inscricoes.css',
})
export class MinhasInscricoes implements OnInit {
  inscricoes = signal<Inscricao[]>([]);

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    const id = this.auth.usuario()?._id;
    if (!id) return;
    this.api.minhasInscricoes(id).subscribe((data) => this.inscricoes.set(data));
  }

  cancelar(inscricaoId: string) {
    if (!confirm('Deseja cancelar sua inscrição?')) return;
    this.api.cancelarInscricao(inscricaoId).subscribe({
      next: () => this.carregar(),
      error: (err) => alert(err.error?.error || 'Erro ao cancelar'),
    });
  }
}
