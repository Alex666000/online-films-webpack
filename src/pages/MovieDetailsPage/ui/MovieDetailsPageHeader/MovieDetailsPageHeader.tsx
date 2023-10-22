import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { getRouteMovieEdit, getRouteMovies } from '@/shared/const/router';
import { getCanEditMovie } from '../../model/selectors/movie';
import { getMovieDetailsData } from '../../../../entities/Movie/model/selectors/movieDetails';

interface MovieDetailsPageHeaderProps {
    className?: string;
}

export const MovieDetailsPageHeader = memo(
    (props: MovieDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const navigate = useNavigate();
        const canEdit = useSelector(getCanEditMovie);
        const movie = useSelector(getMovieDetailsData);

        const onBackToList = useCallback(() => {
            navigate(getRouteMovies());
        }, [navigate]);

        const onEditmovie = useCallback(() => {
            if (movie) {
                navigate(getRouteMovieEdit(movie.id));
            }
        }, [movie, navigate]);

        return (
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button theme={ButtonTheme.OUTLINE} onClick={onEditmovie}>
                        {t('Редактировать')}
                    </Button>
                )}
            </HStack>
        );
    },
);
