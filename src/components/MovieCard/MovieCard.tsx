import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import { useFavorites } from '../../hooks/useFavorites';
import Button from '../Button/Button';
import styles from './MovieCard.module.scss';
import { getImageUrl } from '../../utils/imageUtils';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  //só no caso de o filme não ter poster
 const imageUrl = getImageUrl(movie.poster_path, 'w500');
 
  return (
    <div className={styles.movieCard}>
      <div className={styles.posterContainer}>
        <img src={imageUrl} alt={movie.title} className={styles.poster} />
        
        <button
          className={styles.favoriteBtn}
          onClick={() => toggleFavorite(movie)}
          title={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          {favorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title} title={movie.title}>
          {movie.title}
        </h3>

        <div className={styles.footerCard}>
          <span className={styles.rating}>
            ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
          </span>

          <Link to={`/details/${movie.id}`}>
            <Button variant="secondary" className="btn-sm">
              Detalhes
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}