import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Movie, MovieType, MovieView, MovieSortField } from '@/entities/Movie';
import { MOVIES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { SortOrder } from '@/shared/types/sort';
import { MoviesPageSchema } from '../types/moviesPageSchema';
import { fetchMoviesList } from '../services/fetchMoviesList/fetchMoviesList';

const moviesAdapter = createEntityAdapter<Movie>({
    selectId: (movie) => movie.id,
});

export const getMovies = moviesAdapter.getSelectors<StateSchema>(
    (state) => state.moviesPage || moviesAdapter.getInitialState(),
);

const moviesPageSlice = createSlice({
    name: 'moviesPageSlice',
    initialState: moviesAdapter.getInitialState<MoviesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: MovieView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        sort: MovieSortField.CREATED,
        search: '',
        order: 'asc',
        type: MovieType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<MovieView>) => {
            state.view = action.payload;
            localStorage.setItem(MOVIES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<MovieSortField>) => {
            state.sort = action.payload;
        },
        setType: (state, action: PayloadAction<MovieType>) => {
            state.type = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(
                MOVIES_VIEW_LOCALSTORAGE_KEY,
            ) as MovieView;
            state.view = view;
            state.limit = view === MovieView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMoviesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    moviesAdapter.removeAll(state);
                }
            })
            .addCase(fetchMoviesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    moviesAdapter.setAll(state, action.payload);
                } else {
                    moviesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchMoviesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: moviesPageReducer, actions: moviesPageActions } =
    moviesPageSlice;
