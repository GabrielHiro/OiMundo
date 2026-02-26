import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const API = 'http://localhost:3000';

export interface Evento {
  _id?: string;
  titulo: string;
  descricao: string;
  dataHora: string;
  local: string;
  categoria: string;
  vagas: number;
  imagemUrl?: string;
  organizadorId: string;
  totalInscritos?: number;
  createdAt?: string;
}

export interface Inscricao {
  _id?: string;
  eventoId: Evento | string;
  participanteId: string;
  createdAt?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  // ---- USUARIOS ----
  registro(dados: { nome: string; email: string; senha: string; perfil: string }) {
    return this.http.post<any>(`${API}/usuarios/registro`, dados);
  }

  login(email: string, senha: string) {
    return this.http.post<any>(`${API}/usuarios/login`, { email, senha });
  }

  // ---- EVENTOS ----
  criarEvento(evento: Partial<Evento>) {
    return this.http.post<Evento>(`${API}/eventos`, evento);
  }

  listarEventos(filtros?: { categoria?: string; busca?: string; ordem?: string }) {
    let params = new HttpParams();
    if (filtros?.categoria) params = params.set('categoria', filtros.categoria);
    if (filtros?.busca) params = params.set('busca', filtros.busca);
    if (filtros?.ordem) params = params.set('ordem', filtros.ordem);
    return this.http.get<Evento[]>(`${API}/eventos`, { params });
  }

  eventosDoOrganizador(organizadorId: string) {
    return this.http.get<Evento[]>(`${API}/eventos/organizador/${organizadorId}`);
  }

  eventoDetalhe(id: string) {
    return this.http.get<Evento>(`${API}/eventos/${id}`);
  }

  editarEvento(id: string, dados: Partial<Evento>) {
    return this.http.put<Evento>(`${API}/eventos/${id}`, dados);
  }

  excluirEvento(id: string) {
    return this.http.delete<any>(`${API}/eventos/${id}`);
  }

  // ---- INSCRICOES ----
  inscrever(eventoId: string, participanteId: string) {
    return this.http.post<Inscricao>(`${API}/inscricoes`, { eventoId, participanteId });
  }

  cancelarInscricao(inscricaoId: string) {
    return this.http.delete<any>(`${API}/inscricoes/${inscricaoId}`);
  }

  minhasInscricoes(participanteId: string) {
    return this.http.get<Inscricao[]>(`${API}/inscricoes/participante/${participanteId}`);
  }

  inscritosDoEvento(eventoId: string) {
    return this.http.get<Inscricao[]>(`${API}/inscricoes/evento/${eventoId}`);
  }
}
