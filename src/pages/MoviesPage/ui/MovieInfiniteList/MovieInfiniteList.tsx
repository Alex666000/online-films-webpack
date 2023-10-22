import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/deprecated/Text';
import {
    getMoviesPageError,
    getMoviesPageIsLoading,
    getMoviesPageView,
} from '../../model/selectors/moviesPageSelectors';
import { getMovies } from '../../model/slices/moviesPageSlice';
import { MovieList } from '@/entities/Movie/ui/MovieList/MovieList';

interface MovieInfiniteListProps {
    className?: string;
}

export const MovieInfiniteList = memo((props: MovieInfiniteListProps) => {
    const { className } = props;
    const movies = useSelector(getMovies.selectAll);
    const isLoading = useSelector(getMoviesPageIsLoading);
    const view = useSelector(getMoviesPageView);
    const error = useSelector(getMoviesPageError);
    const { t } = useTranslation();

    if (error) {
        return <Text text={t('Ошибка при загрузке статей')} />;
    }

    return (
        <MovieList
            isLoading={isLoading}
            view={view}
            movies={movies}
            className={className}
        />
    );
});
