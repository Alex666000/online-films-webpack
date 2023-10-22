import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Movie } from '@/entities/Movie';

export const fetchMovieRecommendations = createAsyncThunk<
    Movie[],
    void,
    ThunkConfig<string>
>('movieDetailsPage/fetchMovieRecommendations', async (props, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Movie[]>('/movies', {
            params: {
                _limit: 4,
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
