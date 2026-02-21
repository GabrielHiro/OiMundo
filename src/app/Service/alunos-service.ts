import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
 
export interface Aluno {
  _id?: string;
  nome: string;
  idade: number;
  curso: string;
  notas: number[];
}
 
@Injectable({
  providedIn: 'root',
})

export class AlunosService {
  private http = inject(HttpClient);
  private base = 'http://localhost:3000/alunos';
 
  listar(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.base);
  }
 
  criar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.base, aluno);
  }
 
  buscarPorId(id: string): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.base}/${id}`);
  }
 
  atualizar(id: string, aluno: Aluno): Observable<Aluno> {
    return this.http.patch<Aluno>(`${this.base}/${id}`, aluno);
  }
 
  excluir(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
}