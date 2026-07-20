// App.tsx
import { useEffect } from 'react';
import { getPopularMovies } from './services/movieService';
import { FavoritesProvider } from './context/FavoritesContext';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App() {
  // coloquei aqui para testar se a api estava funcionando antes de fazer a proxima parte
  useEffect(() => {
    const testarApi = async () => {
      try {
        const data = await getPopularMovies();
        console.log("Dados recebidos da API:", data);
      } catch (error) {
        console.error("Falha na requisição:", error);
      }
    };

    testarApi();
  }, []);

  return(
    <ErrorBoundary>
      <FavoritesProvider>
        <div>MyMovies</div>
      </FavoritesProvider>
    </ErrorBoundary>
  );
}

export default App;