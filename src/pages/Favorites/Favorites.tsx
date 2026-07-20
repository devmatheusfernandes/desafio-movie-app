import { useFavorites } from '../../hooks/useFavorites';
import MovieCard from '../../components/MovieCard/MovieCard';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export default function Favorites() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  return (
    <div className="container my-4">
      <div className="mb-4">
        <h2>Meus Filmes Favoritos</h2>
        <p className="text">Aqui estão os filmes que você salvou para assistir depois.</p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-5">
          <h4 className="text-muted mb-3">Sua lista de favoritos está vazia.</h4>
          <p className="text-secondary mb-4">Explore a página inicial e clique no ícone de coração nos filmes que deseja salvar.</p>
          <Button variant="primary" onClick={() => navigate('/')}>
            Explorar Filmes Populares
          </Button>
        </div>
      ) : (
        <div className="row g-4">
          {favorites.map((movie) => (
            <div key={movie.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}