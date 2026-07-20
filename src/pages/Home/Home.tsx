import React, { useEffect, useState } from 'react';
import { getPopularMovies, searchMovieByTitle } from '../../services/movieService';
import { Movie } from '../../types/movie';
import MovieCard from '../../components/MovieCard/MovieCard';
import Button from '../../components/Button/Button';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPopular = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getPopularMovies();
      setMovies(data.results);
    } catch (err) {
      setError('Não foi possível carregar os filmes populares. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  // useeffect para buscar os filmes populares quando o componente é montado
  useEffect(() => {
    fetchPopular();
  }, []);

  //lidar com a busca de filmes por título
  const handleSearch = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      fetchPopular(); //se a busca estiver vazia volta aos populares
      return;
    }

    try {
      setLoading(true);
      setError('');
      const data = await searchMovieByTitle(searchTerm);
      setMovies(data.results);
    } catch (err) {
      setError('Erro ao realizar a busca. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <div className="row mb-4 align-items-center">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <h2>Filmes Populares</h2>
          <p className="text mb-0">Explore os títulos em alta e gerencie sua lista.</p>
        </div>

        <div className="col-12 col-md-6">
          <form onSubmit={handleSearch} className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Pesquisar filme por título..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit" variant="primary">
              Buscar
            </Button>
            {searchTerm && (
              <Button 
                type="button" 
                variant="secondary" 
                onClick={() => { setSearchTerm(''); fetchPopular(); }}
              >
                Limpar
              </Button>
            )}
          </form>
        </div>
      </div>

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && movies.length === 0 && (
        <div className="text-center py-5 text-muted">
          <h4>Nenhum filme encontrado.</h4>
        </div>
      )}

      {!loading && !error && movies.length > 0 && (
        <div className="row g-4">
          {movies.map((movie) => (
            <div key={movie.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}