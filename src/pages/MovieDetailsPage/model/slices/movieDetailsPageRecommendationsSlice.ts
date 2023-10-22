import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { fetchMovieRecommendations } from '../services/fetchMovieRecommendations/fetchMovieRecommendations';
import { MovieDetailsRecommendationsSchema } from '../..';
import { Movie } from '@/entities/Movie';

const recommendationsAdapter = createEntityAdapter<Movie>({
    selectId: (movie) => movie.id,
});

export const getMovieRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>(
        (state) =>
            state.movieDetailsPage?.recommendations ||
            recommendationsAdapter.getInitialState(),
    );

const movieDetailsPageRecommendationsSlice = createSlice({
    name: 'movieDetailsPageRecommendationsSlice',
    initialState:
        recommendationsAdapter.getInitialState<MovieDetailsRecommendationsSchema>(
            {
                isLoading: false,
                error: undefined,
                ids: [],
                entities: {},
            },
        ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchMovieRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchMovieRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: movieDetailsPageRecommendationsReducer } =
    movieDetailsPageRecommendationsSlice;
