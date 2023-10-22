import { StateSchema } from '@/app/providers/StoreProvider';
import { MovieSortField, MovieType, MovieView } from '@/entities/Movie';
import { buildSelector } from '@/shared/lib/store';

export const getMoviesPageIsLoading = (state: StateSchema) =>
    state.moviesPage?.isLoading || false;
export const getMoviesPageError = (state: StateSchema) =>
    state.moviesPage?.error;
export const getMoviesPageView = (state: StateSchema) =>
    state.moviesPage?.view || MovieView.SMALL;
export const getMoviesPageNum = (state: StateSchema) =>
    state.moviesPage?.page || 1;
export const getMoviesPageLimit = (state: StateSchema) =>
    state.moviesPage?.limit || 9;
export const getMoviesPageHasMore = (state: StateSchema) =>
    state.moviesPage?.hasMore;
export const getMoviesPageInited = (state: StateSchema) =>
    state.moviesPage?._inited;
export const getMoviesPageOrder = (state: StateSchema) =>
    state.moviesPage?.order ?? 'asc';
export const getMoviesPageSort = (state: StateSchema) =>
    state.moviesPage?.sort ?? MovieSortField.CREATED;
export const getMoviesPageSearch = (state: StateSchema) =>
    state.moviesPage?.search ?? '';
export const getMoviesPageType = (state: StateSchema) =>
    state.moviesPage?.type ?? MovieType.ALL;

export const [useMovieItemById] = buildSelector(
    (state, id: string) => state.moviesPage?.entities[id],
);
