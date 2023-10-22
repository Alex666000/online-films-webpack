import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchMoviesList } from '../fetchMoviesList/fetchMoviesList';
import { fetchNextMoviesPage } from './fetchNextArticlesPage';

jest.mock('../fetchMoviesList/fetchMoviesList');

describe('fetchNextMoviesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextMoviesPage, {
            moviesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchMoviesList).toHaveBeenCalled();
    });
    test('fetchMovieList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextMoviesPage, {
            moviesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchMoviesList).not.toHaveBeenCalled();
    });
});
