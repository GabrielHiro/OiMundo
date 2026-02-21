import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  nome = '';
  email = '';
  senha = '';
  perfil = 'participante';
  erro = '';
  sucesso = '';

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  cadastrar() {
    this.erro = '';
    this.sucesso = '';

    this.api
      .registro({ nome: this.nome, email: this.email, senha: this.senha, perfil: this.perfil })
      .subscribe({
        next: (user) => {
          this.auth.login(user);
          if (user.perfil === 'organizador') {
            this.router.navigate(['/meus-eventos']);
          } else {
            this.router.navigate(['/catalogo']);
          }
        },
        error: (err) => {
          this.erro = err.error?.error || 'Erro ao cadastrar';
        },
      });
  }
}
