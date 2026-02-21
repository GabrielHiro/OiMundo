import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

interface Post
{
  id: number;
  titulo: string;
  conteudo: string;
  autor: string;
  data: Date;
}



@Component({
  selector: 'app-types',
  imports: [CommonModule, DatePipe],
  templateUrl: './types.html',
  styleUrl: './types.css',
})

export class Types {
    posts: Post[] = [
    {
      id: 1,
      titulo: 'Meu primeiro post',
      conteudo: 'Este é o conteúdo do meu primeiro post.',
      autor: 'Gabriel Hiro',
      data: new Date()
    },
    {
      id: 2,
      titulo: 'Meu segundo post',  
      conteudo: 'Este é o conteúdo do meu segundo post.',
      autor: 'Gabriel Hiro',
      data: new Date()
    }
  ];

  post1: Post = {
    id: 1,
    titulo: 'Meu primeiro post',
    conteudo: 'Este é o conteúdo do meu primeiro post.',
    autor: 'Gabrie Hiro',
    data: new Date()
  };
}
