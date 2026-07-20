import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('Precisa ser usado dentro do contexto de FavoriteProvider');
    }
    return context;
};