import { Component } from '@angular/core';
import { ProdutoService } from '../Service/produto-service';

@Component({
  selector: 'app-lista-produto',
  imports: [],
  templateUrl: './lista-produto.html',
  styleUrl: './lista-produto.css',
})
export class ListaProduto {
  produtos: string[];
  constructor(private produtoService: ProdutoService) {
    this.produtos = this.produtoService.getProdutos();
  }
}
