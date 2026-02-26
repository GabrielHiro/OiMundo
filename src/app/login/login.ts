import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  senha = '';
  erro = '';

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  entrar() {
    this.erro = '';
    this.api.login(this.email, this.senha).subscribe({
      next: (user) => {
        this.auth.login(user);
        if (user.perfil === 'organizador') {
          this.router.navigate(['/meus-eventos']);
        } else {
          this.router.navigate(['/catalogo']);
        }
      },
      error: (err) => {
        this.erro = err.error?.error || 'Erro ao fazer login';
      },
    });
  }
}
