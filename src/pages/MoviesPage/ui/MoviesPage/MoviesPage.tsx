import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { MoviePageGreeting } from '@/features/moviePageGreeting';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { moviesPageReducer } from '../../model/slices/moviesPageSlice';
import { initMoviesPage } from '../../model/services/initMoviesPage/initMoviesPage';
import { MovieInfiniteList } from '../MovieInfiniteList/MovieInfiniteList';
import { fetchNextMoviesPage } from '../../model/services/fetchNextMoviesPage/fetchNextMoviesPage';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import cls from './MoviesPage.module.scss';

interface MoviesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    moviesPage: moviesPageReducer,
};

const MoviesPage = (props: MoviesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextMoviesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initMoviesPage(searchParams));
    });

    const content = (
        <StickyContentLayout
            left={<ViewSelectorContainer />}
            right={<FiltersContainer />}
            content={
                <Page
                    data-testid="MoviesPage"
                    onScrollEnd={onLoadNextPart}
                    className={classNames(cls.MoviesPageRedesigned, {}, [
                        className,
                    ])}
                >
                    <MovieInfiniteList className={cls.list} />
                    <MoviePageGreeting />
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};
export default memo(MoviesPage);
