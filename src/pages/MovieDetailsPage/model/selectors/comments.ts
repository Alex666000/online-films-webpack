import { StateSchema } from '@/app/providers/StoreProvider';

export const getMovieCommentsIsLoading = (state: StateSchema) => {
    return state.movieDetailsPage?.comments?.isLoading;
};

export const getMovieCommentsError = (state: StateSchema) => {
    return state.movieDetailsPage?.comments?.error;
};
