import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: string[] = ['Monitor 360Hz', 'Mouse', 'Teclado', 'Headset'];

  getProdutos(): string[] {
    return this.produtos;
  }
}
