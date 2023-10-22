import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Movie, MovieType } from '@/entities/Movie';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import {
    getMoviesPageLimit,
    getMoviesPageNum,
    getMoviesPageOrder,
    getMoviesPageSearch,
    getMoviesPageSort,
    getMoviesPageType,
} from '../../selectors/moviesPageSelectors';

interface FetchMoviesListProps {
    replace?: boolean;
}

export const fetchMoviesList = createAsyncThunk<
    Movie[],
    FetchMoviesListProps,
    ThunkConfig<string>
>('moviesPage/fetchMoviesList', async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const limit = getMoviesPageLimit(getState());
    const sort = getMoviesPageSort(getState());
    const order = getMoviesPageOrder(getState());
    const search = getMoviesPageSearch(getState());
    const page = getMoviesPageNum(getState());
    const type = getMoviesPageType(getState());

    try {
        addQueryParams({
            sort,
            order,
            search,
            type,
        });
        const response = await extra.api.get<Movie[]>('/movies', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === MovieType.ALL ? undefined : type,
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
