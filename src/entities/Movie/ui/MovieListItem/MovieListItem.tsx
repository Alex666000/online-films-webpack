import { HTMLAttributeAnchorTarget, memo } from 'react';
import { MovieListItemRedesigned } from './MovieListItemRedesigned/MovieListItemRedesigned';
import { Movie, MovieView } from '../../index';

export interface MovieListItemProps {
    className?: string;
    movie: Movie;
    view: MovieView;
    target?: HTMLAttributeAnchorTarget;
}

export const MovieListItem = memo((props: MovieListItemProps) => {
    return <MovieListItemRedesigned {...props} />;
});
