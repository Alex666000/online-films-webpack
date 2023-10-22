import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { fetchCommentsByMovieId } from '../fetchCommentsByMovieId/fetchCommentsByMovieId';
import { getMovieDetailsData } from '../../../../../entities/Movie/model/selectors/movieDetails';

export const addCommentForMovie = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>('movieDetails/addCommentForMovie', async (text, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    const userData = getUserAuthData(getState());
    const movie = getMovieDetailsData(getState());

    if (!userData || !text || !movie) {
        return rejectWithValue('no data');
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            movieId: movie.id,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByMovieId(movie.id));

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
