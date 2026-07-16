
//Para construir essa primeira interface, utilizei como base a documentação da API do TMDB, que pode ser encontrada em: https://developer.themoviedb.org/reference/movie-popular-list

export interface Movie {
    id: number;
    title: string;
    poster_path: string | null;
    popularity: number; // vai servir para ordenar os filmes por popularidade
    vote_average: number; // esse vai servir como rating do filme
    is_favorite: boolean; // esse vai servir para marcar se o filme é favorito ou não

    //para página de detalhes vamos precisar de mais algumas informacoes, olhei aqui tambem https://developer.themoviedb.org/reference/search-movie e https://developer.themoviedb.org/reference/movie-details
    overview: string; // sinopse do filme
    genres: Genre[]; // array de ids de gêneros do filme
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}