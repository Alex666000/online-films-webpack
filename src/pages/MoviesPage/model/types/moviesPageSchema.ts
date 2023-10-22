import { EntityState } from '@reduxjs/toolkit';
import { Movie, MovieView, MovieSortField, MovieType } from '@/entities/Movie';
import { SortOrder } from '@/shared/types/sort';

export interface MoviesPageSchema extends EntityState<Movie> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: MovieView;
    order: SortOrder;
    sort: MovieSortField;
    search: string;
    type: MovieType;

    _inited: boolean;
}
