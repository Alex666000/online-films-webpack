import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { MovieListItemSkeleton } from '../MovieListItem/MovieListItemSkeleton';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Movie, MovieView } from '../..';
import { MovieListItem } from '../MovieListItem/MovieListItem';
import cls from './MovieList.module.scss';

interface MovieListProps {
    className?: string;
    movies: Movie[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: MovieView;
}

const getSkeletons = (view: MovieView) =>
    new Array(view === MovieView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <MovieListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

export const MovieList = memo((props: MovieListProps) => {
    const {
        className,
        movies,
        view = MovieView.SMALL,
        isLoading,
        target,
    } = props;
    const { t } = useTranslation();

    if (!isLoading && !movies.length) {
        return (
            <div
                className={classNames(cls.MovieList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size={TextSize.L} title={t('Фильмы не найдены')} />
            </div>
        );
    }

    return (
        <HStack
            wrap="wrap"
            gap="16"
            className={classNames(cls.MovieListRedesigned, {}, [])}
            data-testid="MovieList"
        >
            {movies.map((item) => (
                <MovieListItem
                    movie={item}
                    view={view}
                    target={target}
                    key={item.id}
                    className={cls.card}
                />
            ))}
            {isLoading && getSkeletons(view)}
        </HStack>
    );
});
