import { StateSchema } from '@/app/providers/StoreProvider';

export const getMovieRecommendationsIsLoading = (state: StateSchema) => {
    return state.movieDetailsPage?.recommendations?.isLoading;
};

export const getMovieRecommendationsError = (state: StateSchema) => {
    return state.movieDetailsPage?.recommendations?.error;
};
