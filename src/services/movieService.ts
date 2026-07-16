import api from "./api";
import { Movie, MovieResponse } from "../types/movie";

export const getPopularMovies = async (): Promise<MovieResponse> => {
    // estrutura sugerida na documentacao https://axios.rest/pages/advanced/promises.html#async-await
    try {
        const { data } = await api.get<MovieResponse>("/movie/popular");
        return data;
    } catch (error) {
        console.error("Erro ao buscar filmes populares:", error);
        throw error;
    }
};

export const searchMovieByTitle = async (query: string): Promise<MovieResponse> => {
    try {
        const { data } = await api.get<MovieResponse>("/search/movie", {
            params: { query } // aqui vai o termo de busca, no caso o titulo do filme
        });
        return data;
    } catch (error) {
        console.error("Erro ao buscar filme por título:", error);
        throw error;
    }
}

export const getMovieById = async (id: string): Promise<Movie> => {
    try {
        const { data } = await api.get<Movie>(`/movie/${id}`);
        return data;
    } catch (error) {
        console.error(`Erro ao buscar filme com ID ${id}:`, error);
        throw error;
    }
};