import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Movie } from '../../../index';

export const fetchMovieById = createAsyncThunk<
    Movie,
    string | undefined,
    ThunkConfig<string>
>('movieDetails/fetchMovieById', async (movieId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!movieId) {
        throw new Error('');
    }

    try {
        const response = await extra.api.get<Movie>(`/movies/${movieId}`, {
            params: {
                _expand: 'user',
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
