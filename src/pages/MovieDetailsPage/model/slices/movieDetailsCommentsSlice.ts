import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from '@/entities/Comment';
import { StateSchema } from '@/app/providers/StoreProvider';
import { fetchCommentsByMovieId } from '../services/fetchCommentsByMovieId/fetchCommentsByMovieId';
import { MovieDetailsCommentsSchema } from '../..';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getMovieComments = commentsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.movieDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const movieDetailsCommentsSlice = createSlice({
    name: 'movieDetailsCommentsSlice',
    initialState: commentsAdapter.getInitialState<MovieDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByMovieId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCommentsByMovieId.fulfilled,
                (state, action: PayloadAction<Comment[]>) => {
                    state.isLoading = false;
                    commentsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchCommentsByMovieId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: movieDetailsCommentsReducer } =
    movieDetailsCommentsSlice;
