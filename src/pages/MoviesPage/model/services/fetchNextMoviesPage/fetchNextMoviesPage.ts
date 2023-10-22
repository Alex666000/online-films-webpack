import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getMoviesPageHasMore,
    getMoviesPageIsLoading,
    getMoviesPageNum,
} from '../../selectors/moviesPageSelectors';
import { moviesPageActions } from '../../slices/moviesPageSlice';
import { fetchMoviesList } from '../fetchMoviesList/fetchMoviesList';

export const fetchNextMoviesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('moviesPage/fetchNextMoviesPage', async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getMoviesPageHasMore(getState());
    const page = getMoviesPageNum(getState());
    const isLoading = getMoviesPageIsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(moviesPageActions.setPage(page + 1));
        dispatch(fetchMoviesList({}));
    }
});
