### Estrutura de Pastas

```
src/
├── assets/
│   └── global.scss          
├── components/
│   ├── Button/
│   │   ├── Button.tsx                                                                          OK
│   │   └── Button.module.scss                                                                  OK
│   ├── Header/
│   │   ├── Header.tsx                                                                          OK
│   │   └── Header.module.scss                                                                  OK
│   |── MovieCard/
│   |   ├── MovieCard.tsx
│   |   └── MovieCard.module.scss
│   └── ErrorBoundary/    
│       ├── ErrorBoundary.tsx                                                                   OK
│       └── ErrorBoundary.module.scss
├── context/
│   └── FavoritesContext.tsx # Gerencia estado de favoritos e localStorage                      OK
├── hooks/
│   └── useFavorites.ts      # Hook customizado para facilitar o acesso aos favoritos           OK
├── pages/
│   ├── Home/
│   │   └── Home.tsx         # Listagem de filmes e campo de busca
│   ├── Details/
│   │   └── Details.tsx      # Detalhes do filme
│   └── Favorites/
│       └── Favorites.tsx    # Listagem dos filmes salvos       
├── routes/
│   └── AppRoutes.tsx        # Configuração do React Router                                     OK
├── services/
│   ├── api.ts               # Axios/Fetch                                                      OK
│   └── movieService.ts      # Funções de requisição                                            OK
├── types/
│   └── movie.ts             # Interfaces                                                       OK
├── App.tsx
├── index.tsx                
└── react-app-env.d.ts                                                                          OK
``` 

---

### Detalhes

1. **`components/` vs `pages/**`:
* Separa o que é *UI pura* do que é *página*. Isso facilita a reutilização e testes.

2. **`context/` para Favoritos**:
* Como os favoritos precisam ser acessados tanto na página de `Detalhes` (para salvar) quanto na de `Favoritos` (para listar), ter um `FavoritesContext` centraliza essa lógica e evita que ter que passar propriedades manualmente por vários componentes.

3. **`types/`**:
* Centralizar as interfaces permite importar elas em qualquer arquivo.

4. **`services/`**:
* Isolar o código que consome a API do TMDB.

5. **`hooks/`**:
* Criar um `useFavorites` para gerenciar o `localStorage` deixa o código dos seus componentes muito mais limpo e legível.
