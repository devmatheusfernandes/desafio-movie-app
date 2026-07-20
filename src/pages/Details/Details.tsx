import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById } from '../../services/movieService';
import { Movie } from '../../types/movie';
import { useFavorites } from '../../hooks/useFavorites';
import Button from '../../components/Button/Button';
import { getImageUrl } from '../../utils/imageUtils';

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const favorite = movie ? isFavorite(movie.id) : false;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id) return;
      try {
        setLoading(true);
        setError('');
        const data = await getMovieById(id);
        setMovie(data);
      } catch (err) {
        setError('Não foi possível carregar os detalhes do filme.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="container my-5 text-center">
        <div className="alert alert-danger" role="alert">
          {error || 'Filme não encontrado.'}
        </div>
        <Button variant="secondary" onClick={() => navigate('/')}>
          Voltar para Home
        </Button>
      </div>
    );
  }

  const posterUrl = getImageUrl(movie.poster_path, 'w500');

  return (
    <div className="container my-4">
      <Button variant="secondary" className="mb-4" onClick={() => navigate(-1)}>
        ← Voltar
      </Button>

      <div className="row g-4 align-items-start">
        <div className="col-12 col-md-4 text-center">
          <img
            src={posterUrl}
            alt={movie.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>

        <div className="col-12 col-md-8">
          <h1 className="fw-bold mb-3">{movie.title}</h1>
          
          <div className="d-flex align-items-center gap-3 mb-3">
            <span className="badge bg-warning text-dark fs-6">
              ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
            </span>
         
          </div>

          {movie.genres && movie.genres.length > 0 && (
            <div className="d-flex gap-2 mb-3 flex-wrap">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="badge bg-secondary text-light">
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          <h5 className="text-secondary mt-4">Sinopse</h5>
          <p className="lead fs-6">{movie.overview || 'Sinopse não disponível'}</p>

          <div className="mt-4">
            <Button
              variant={favorite ? 'secondary' : 'primary'}
              onClick={() => toggleFavorite(movie)}
            >
              {favorite ? '❤️ Remover dos Favoritos' : '🤍 Adicionar aos Favoritos'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}