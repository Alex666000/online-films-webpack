import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { MovieSortField, MovieType } from '@/entities/Movie';
import { SortOrder } from '@/shared/types/sort';
import { getMoviesPageInited } from '../../selectors/moviesPageSelectors';
import { moviesPageActions } from '../../slices/moviesPageSlice';
import { fetchMoviesList } from '../fetchMoviesList/fetchMoviesList';

export const initMoviesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('moviesPage/initMoviesPage', async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getMoviesPageInited(getState());

    if (!inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as MovieSortField;
        const searchFromUrl = searchParams.get('search');
        const typeFromUrl = searchParams.get('type') as MovieType;

        if (orderFromUrl) {
            dispatch(moviesPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(moviesPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
            dispatch(moviesPageActions.setSearch(searchFromUrl));
        }
        if (typeFromUrl) {
            dispatch(moviesPageActions.setType(typeFromUrl));
        }

        dispatch(moviesPageActions.initState());
        dispatch(fetchMoviesList({}));
    }
});
