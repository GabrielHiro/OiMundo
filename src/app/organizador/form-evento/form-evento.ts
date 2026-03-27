import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, Evento } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-form-evento',
  imports: [FormsModule],
  templateUrl: './form-evento.html',
  styleUrl: './form-evento.css',
})
export class FormEvento implements OnInit {
  editando = false;
  eventoId = '';
  erro = '';

  titulo = '';
  descricao = '';
  dataHora = '';
  local = '';
  categoria = 'Tecnologia';
  vagas = 50;
  imagemUrl = '';

  categorias = ['Tecnologia', 'Esportes', 'Música', 'Educação', 'Negócios', 'Outros'];

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editando = true;
      this.eventoId = id;
      this.api.eventoDetalhe(id).subscribe((ev) => {
        this.titulo = ev.titulo;
        this.descricao = ev.descricao;
        this.dataHora = ev.dataHora.slice(0, 16);
        this.local = ev.local;
        this.categoria = ev.categoria;
        this.vagas = ev.vagas;
        this.imagemUrl = ev.imagemUrl || '';
        this.cdr.markForCheck();
      });
    }
  }

  salvar() {
    this.erro = '';
    const dados: Partial<Evento> = {
      titulo: this.titulo,
      descricao: this.descricao,
      dataHora: new Date(this.dataHora).toISOString(),
      local: this.local,
      categoria: this.categoria,
      vagas: this.vagas,
      imagemUrl: this.imagemUrl,
      organizadorId: this.auth.usuario()!._id,
    };

    const obs = this.editando
      ? this.api.editarEvento(this.eventoId, dados)
      : this.api.criarEvento(dados);

    obs.subscribe({
      next: () => this.router.navigate(['/meus-eventos']),
      error: (err) => (this.erro = err.error?.error || 'Erro ao salvar evento'),
    });
  }
}
