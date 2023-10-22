import { HTMLAttributeAnchorTarget, memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { MovieListItemRedesigned } from './MovieListItemRedesigned/MovieListItemRedesigned';
import { MovieListItemDeprecated } from './MovieListItemDeprecated/MovieListItemDeprecated';
import { Movie, MovieView } from '../../index';

export interface MovieListItemProps {
    className?: string;
    movie: Movie;
    view: MovieView;
    target?: HTMLAttributeAnchorTarget;
}

export const MovieListItem = memo((props: MovieListItemProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<MovieListItemRedesigned {...props} />}
            off={<MovieListItemDeprecated {...props} />}
        />
    );
});
