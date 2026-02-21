import { Injectable, signal } from '@angular/core';

export interface UsuarioLogado {
  _id: string;
  nome: string;
  email: string;
  perfil: 'organizador' | 'participante';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  usuario = signal<UsuarioLogado | null>(null);

  login(user: UsuarioLogado) {
    this.usuario.set(user);
    localStorage.setItem('usuario', JSON.stringify(user));
  }

  logout() {
    this.usuario.set(null);
    localStorage.removeItem('usuario');
  }

  carregarDoStorage() {
    const salvo = localStorage.getItem('usuario');
    if (salvo) {
      this.usuario.set(JSON.parse(salvo));
    }
  }

  estaLogado(): boolean {
    return this.usuario() !== null;
  }

  ehOrganizador(): boolean {
    return this.usuario()?.perfil === 'organizador';
  }

  ehParticipante(): boolean {
    return this.usuario()?.perfil === 'participante';
  }
}
