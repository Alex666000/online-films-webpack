import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useMovieRecommendationsList } from '../../api/movieRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { MovieList } from '@/entities/Movie/ui/MovieList/MovieList';

interface MovieRecommendationsListProps {
    className?: string;
}

export const MovieRecommendationsList = memo(
    (props: MovieRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const {
            isLoading,
            data: movies,
            error,
        } = useMovieRecommendationsList(3);

        if (isLoading || error || !movies) {
            return null;
        }

        return (
            <VStack
                data-testid="movieRecommendationsList"
                gap="8"
                className={classNames('', {}, [className])}
            >
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text size="l" title={t('Рекомендуем')} />}
                    off={
                        <TextDeprecated
                            size={TextSize.L}
                            title={t('Рекомендуем')}
                        />
                    }
                />
                <MovieList movies={movies} target="_blank" />
            </VStack>
        );
    },
);
