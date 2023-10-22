import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByMovieId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>('movieDetails/fetchCommentsByMovieId', async (movieId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!movieId) {
        return rejectWithValue('error');
    }

    try {
        const response = await extra.api.get<Comment[]>('/comments', {
            params: {
                movieId,
                _expand: 'user',
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
