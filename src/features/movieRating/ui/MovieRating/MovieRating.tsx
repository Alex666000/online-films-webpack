import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useGetMovieRating, useRateMovie } from '../../api/movieRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

export interface MovieRatingProps {
    className?: string;
    movieId: string;
}

const MovieRating = memo((props: MovieRatingProps) => {
    const { className, movieId } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading } = useGetMovieRating({
        movieId,
        userId: userData?.id ?? '',
    });
    const [rateMovieMutation] = useRateMovie();

    const handleRateMovie = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateMovieMutation({
                    userId: userData?.id ?? '',
                    movieId,
                    rate: starsCount,
                    feedback,
                });
            } catch (e) {
                // handle error
                console.log(e);
            }
        },
        [movieId, rateMovieMutation, userData?.id],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleRateMovie(starsCount, feedback);
        },
        [handleRateMovie],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleRateMovie(starsCount);
        },
        [handleRateMovie],
    );

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            rate={rating?.rate}
            className={className}
            title={t('Оцените фильм')}
            feedbackTitle={t(
                'Оставьте свой отзыв о фильме, это поможет улучшить качество',
            )}
            hasFeedback
        />
    );
});

export default MovieRating;
