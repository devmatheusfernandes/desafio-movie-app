
# 🎬 Movies

Aplicação web desenvolvida em React para explorar filmes populares, buscar títulos específicos, visualizar detalhes e gerenciar uma lista de favoritos persistida localmente.

## Tecnologias Utilizadas

- **React** (com TypeScript)
- **React Router DOM** (para navegação entre páginas)
- **Axios** (para consumo da API do TMDB)
- **Bootstrap 5 & SCSS / SCSS Modules** (para estilização e responsividade)

## Como Rodar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/devmatheusfernandes/desafio-movie-app.git
   ```

2. **Entre na pasta do projeto:**
   ```bash
   cd desafio-movie-app
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. Configure a variável de ambiente da API do TMDB:
   - Crie um arquivo chamado `.env` na raiz do projeto com base no arquivo `env-example`.
   - Adicione sua chave da API TMDB:
     ```env
     REACT_APP_API_KEY=sua_chave_aqui
     REACT_APP_BASE_URL=https://api.themoviedb.org/3
     ```

5. **Execute a aplicação em modo de desenvolvimento:**
   ```bash
   npm start
   ```

6. Abra o navegador e acesse: `http://localhost:3000`

## Decisões Técnicas

- **SCSS Modules e Bootstrap:** Utilizei o Bootstrap para agilizar a criação de grids responsivos e utilitários visuais, combinado com SCSS Modules nos componentes para isolar os estilos e evitar conflitos de estilos globais.
- **Gerenciamento de Favoritos (`Context API` e `LocalStorage`):** A lista de favoritos foi centralizada em um Contexto do React (`FavoritesContext`), garantindo que qualquer componente consiga interagir com os favoritos em tempo real (recuperado do localstorage) e mantendo os dados salvos mesmo após recarregar a página
- **Tratamento de Erros:** Implementaçao de um `ErrorBoundary` global para capturar falhas inesperadas de renderização.
- **Modularização:** Organização clara das pastas separando serviços de API (`/services`), componentes reutilizaveis (`/components`), rotas (`/routes`), contextos (`/context`) e páginas (`/pages`), facilitando a manutenção e escalabilidade do código.

### Estrutura de Pastas

```
src/
├── assets/
│   └── global.scss                                                                             OK
├── components/
│   ├── Button/
│   │   ├── Button.tsx                                                                          OK
│   │   └── Button.module.scss                                                                  OK
│   ├── Header/
│   │   ├── Header.tsx                                                                          OK
│   │   └── Header.module.scss                                                                  OK
│   ├── MovieCard/
│   │   ├── MovieCard.tsx                                                                       OK
│   │   └── MovieCard.module.scss                                                               OK
│   └── ErrorBoundary/
│       ├── ErrorBoundary.tsx                                                                   OK
│       └── ErrorBoundary.module.scss                                                           Não vou precisar
├── context/
│   └── FavoritesContext.tsx # Gerencia estado de favoritos e localStorage                      OK
├── hooks/
│   └── useFavorites.ts      # Hook customizado para facilitar o acesso aos favoritos           OK
├── pages/
│   ├── Home/
│   │   └── Home.tsx         # Listagem de filmes e campo de busca                              OK
│   ├── Details/
│   │   └── Details.tsx      # Detalhes do filme                                                OK
│   └── Favorites/
│       └── Favorites.tsx    # Listagem dos filmes salvos
├── routes/
│   └── AppRoutes.tsx        # Configuração do React Router                                     OK
├── services/
│   ├── api.ts               # Axios/Fetch                                                      OK
│   └── movieService.ts      # Funções de requisição                                            OK
├── types/
│   └── movie.ts             # Interfaces                                                       OK
├── App.tsx                                                                                     OK
├── index.tsx                                                                                   OK
└── react-app-env.d.ts                                                                          OK
```

### Detalhes

1. **`components/` vs `pages/`:**
   - Separa o que é *UI pura* do que é *página*. Isso facilita a reutilização e testes.

2. **`context/` para Favoritos**:
   - Como os favoritos precisam ser acessados tanto na página de `Detalhes` (para salvar) quanto na de `Favoritos` (para listar), ter um `FavoritesContext` centraliza essa lógica e evita que ter que passar propriedades manualmente por vários componentes.

3. **`types/`**:
   - Centralizar as interfaces permite importar elas em qualquer arquivo.

4. **`services/`**:
   - Isolar o código que consome a API do TMDB.

5. **`hooks/`**:
   - Criar um `useFavorites` para gerenciar o `localStorage` deixa o código dos seus componentes muito mais limpo e legível.
