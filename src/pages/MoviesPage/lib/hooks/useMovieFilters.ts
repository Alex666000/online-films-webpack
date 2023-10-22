import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
    getMoviesPageOrder,
    getMoviesPageSearch,
    getMoviesPageSort,
    getMoviesPageType,
    getMoviesPageView,
} from '../../model/selectors/moviesPageSelectors';
import { MovieSortField, MovieType, MovieView } from '@/entities/Movie';
import { SortOrder } from '@/shared/types/sort';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { fetchMoviesList } from '../../model/services/fetchMoviesList/fetchMoviesList';
import { moviesPageActions } from '../../model/slices/moviesPageSlice';

export function useMovieFilters() {
    const view = useSelector(getMoviesPageView);
    const sort = useSelector(getMoviesPageSort);
    const order = useSelector(getMoviesPageOrder);
    const search = useSelector(getMoviesPageSearch);
    const type = useSelector(getMoviesPageType);

    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
        dispatch(fetchMoviesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: MovieView) => {
            dispatch(moviesPageActions.setView(view));
        },
        [dispatch],
    );

    const onChangeSort = useCallback(
        (newSort: MovieSortField) => {
            dispatch(moviesPageActions.setSort(newSort));
            dispatch(moviesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(moviesPageActions.setOrder(newOrder));
            dispatch(moviesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(moviesPageActions.setSearch(search));
            dispatch(moviesPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    const onChangeType = useCallback(
        (value: MovieType) => {
            dispatch(moviesPageActions.setType(value));
            dispatch(moviesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return {
        view,
        sort,
        order,
        search,
        type,
        onChangeView,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
    };
}
