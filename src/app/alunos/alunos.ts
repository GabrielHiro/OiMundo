import { Component, inject } from '@angular/core';
import { AlunosService, Aluno } from '../Service/alunos-service';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-alunos',
  imports: [FormsModule],
  templateUrl: './alunos.html',
  styleUrl: './alunos.css',
})
export class Alunos {
  private api = inject(AlunosService);
 
  alunos: Aluno[] = [];
  carregando = false;
  salvando = false;
  erro = '';
 
  nome = '';
  idade : number | null = null;
  curso = '';
  notasCsv = ''; //7.5, 8, 9.2
 
  ngOnInit() {
    this.carregar();
  }
 
  carregar() {
    this.carregando = true;
   
    this.api.listar().subscribe({
      next: (alunos) => {
        this.alunos = alunos;
        this.carregando = false;
      },
      error: (err) => {
        this.erro = 'Erro ao carregar alunos';
        console.error(err);
        this.carregando = false;
      }
    });
  }
 
  criar() {
    if(!this.nome || this.idade === null || !this.curso) {
      this.erro = 'Preencha nome, idade e curso';
      return;
    }
 
    const aluno: Aluno = {
      nome: this.nome,
      idade: this.idade,
      curso: this.curso,
      notas: this.notasCsv.split(',').map(n => parseFloat(n.trim()))
    };
 
    this.salvando = true;
    this.api.criar(aluno).subscribe({
      next: (aluno) => {
        this.nome = '';
        this.idade = null;
        this.curso = '';
        this.notasCsv = '';
        this.salvando = false;
        this.carregar();
      },
      error: (err) => {
        this.erro = 'Erro ao criar aluno';
        console.error(err);
        this.salvando = false;
      }
    });
  }
  excluir(id: string) {
    if(!id) return;
 
    this.api.excluir(id).subscribe({
      next: () => {
        this.carregar();
      },
      error: (err) => {
        this.erro = 'Erro ao excluir aluno';
        console.error(err);
      }
    });
  }
}
 