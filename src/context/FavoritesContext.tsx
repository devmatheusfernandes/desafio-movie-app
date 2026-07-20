import {createContext, useState, ReactNode, useEffect} from 'react';
import { Movie } from './../types/movie';

interface FavoritesContextType {
    favorites: Movie[];
    toggleFavorite: (movie: Movie) => void;
    isFavorite: (id: number) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType>({} as FavoritesContextType);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    
    // ele vai iniciar buscando direto do localstorage, assim ele nao pisca vazio e depois aparece favoritado
    // colocamos para corrigir porque como o estado aparecia ja como vazio o useeffect nao renderizava depois
    const [favorites, setFavorites] = useState<Movie[]>(() => {
        const stored = localStorage.getItem('favorites');
        return stored ? JSON.parse(stored) : [];
    });
    
    // Carrega os dados do localStorage ao iniciar
    useEffect(() => {
        const stored = localStorage.getItem('favorites');
        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    }, []);

    //E aqui toda vez que o estado muda, ele salva no localStorage
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (movie: Movie) => {
        setFavorites((prev) => {
        const isAlreadyFavorite = prev.find((f) => f.id === movie.id);
        if (isAlreadyFavorite) {
            return prev.filter((f) => f.id !== movie.id);
        }
        return [...prev, movie];
        });
    };

    const isFavorite = (id: number) => favorites.some((f) => f.id === id);

    return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )}