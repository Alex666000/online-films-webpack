import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import cls from './MovieDetailsPage.module.scss';
import { movieDetailsPageReducer } from '../../model/slices';
import { MovieRating } from '@/features/movieRating';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';
import { MovieDetailsComments } from '../MovieDetailsComments/MovieDetailsComments';
import { MovieRecommendationsList } from '@/features/movieRecommendationsList';

interface MovieDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    movieDetailsPage: movieDetailsPageReducer,
};

const MovieDetailsPage = (props: MovieDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('movie-details');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <StickyContentLayout
                content={
                    <Page
                        className={classNames(cls.MovieDetailsPage, {}, [
                            className,
                        ])}
                    >
                        <VStack gap="16" max>
                            <DetailsContainer />
                            <MovieRating movieId={id} />
                            <MovieRecommendationsList />
                            <MovieDetailsComments id={id} />
                        </VStack>
                    </Page>
                }
                right={<AdditionalInfoContainer />}
            />
        </DynamicModuleLoader>
    );
};

export default memo(MovieDetailsPage);
