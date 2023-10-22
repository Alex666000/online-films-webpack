import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { useMovieFilters } from '../../lib/hooks/useMovieFilters';
import { MovieSortSelector } from '@/features/MovieSortSelector';
import { MovieViewSelector } from '@/features/MovieViewSelector';
import { MovieTypeTabs } from '@/features/MovieTypeTabs';
import cls from './MoviesPageFilters.module.scss';

interface MoviesPageFiltersProps {
    className?: string;
}

export const MoviesPageFilters = memo((props: MoviesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
        onChangeSort,
        onChangeType,
        sort,
        type,
        onChangeSearch,
        search,
        onChangeView,
        view,
        onChangeOrder,
        order,
    } = useMovieFilters();

    return (
        <div className={classNames(cls.MoviesPageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <MovieSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <MovieViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t('Поиск')}
                />
            </Card>
            <MovieTypeTabs
                value={type}
                onChangeType={onChangeType}
                className={cls.tabs}
            />
        </div>
    );
});
