# Gerenciador de Eventos - Front-end

Front-end do sistema de gerenciamento de eventos, construído com Angular 21.

Esse projeto consome a API REST (Node.js + Express) e implementa todas as telas tanto do Organizador quanto do Participante.

## Stack

- Angular 21 (standalone components)
- TypeScript
- RxJS
- Angular Router
- HttpClient

## Como rodar

1. Instalar dependências:
```bash
npm install
```

2. Garantir que a API back-end está rodando em `http://localhost:3000`

3. Subir o servidor de dev:
```bash
npm start
```

4. Acessar: [http://localhost:4200](http://localhost:4200)

## Funcionalidades

### Autenticação (simplificada)
- Tela de cadastro com seleção de perfil (Organizador ou Participante)
- Tela de login
- Navegação muda conforme o perfil logado

### Organizador
- **Meus Eventos**: lista os eventos criados com status (Futuro / Ocorrendo / Finalizado)
- **Criar Evento**: formulário com título, descrição, data/hora, local, categoria, vagas e imagem
- **Editar Evento**: mesmo formulário preenchido com dados existentes
- **Ver Inscritos**: tabela com nome, email e data de inscrição de cada participante

### Participante
- **Catálogo**: lista todos os eventos disponíveis com filtro por categoria, busca por texto e ordenação por data
- **Detalhes do Evento**: mostra todas as informações, vagas restantes e botão de inscrição
- **Minhas Inscrições**: lista eventos nos quais está inscrito, com opção de cancelar

## Estrutura principal

```
src/app/
├── services/
│   ├── api.service.ts       # chamadas HTTP pra API
│   └── auth.service.ts      # estado do usuário logado
├── login/                   # tela de login
├── registro/                # tela de cadastro
├── organizador/
│   ├── meus-eventos/        # listagem dos eventos do organizador
│   ├── form-evento/         # criar / editar evento
│   └── inscritos/           # inscritos por evento
├── participante/
│   ├── catalogo/            # catálogo geral de eventos
│   ├── evento-detalhe/      # detalhes + inscrição
│   └── minhas-inscricoes/   # inscrições do participante
├── app.routes.ts            # rotas
├── app.ts                   # componente raiz
├── app.html                 # navbar dinâmica
└── app.config.ts            # providers (HttpClient, Router)
```

## Back-end

O back-end fica em um repositório separado. É feito com Node.js + Express + MongoDB.

Rodar a API primeiro antes de usar o front.

## Autor
Gabriel Hiro Furukawa
