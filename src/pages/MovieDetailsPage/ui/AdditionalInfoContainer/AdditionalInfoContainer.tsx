import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';
import { MovieAdditionalInfo } from '@/widgets/MovieAdditionalInfo';
import cls from './AdditionalInfoContainer.module.scss';
import { getRouteMovieEdit } from '@/shared/const/router';
import { getMovieDetailsData } from '../../../../entities/Movie/model/selectors/movieDetails';

export const AdditionalInfoContainer = memo(() => {
    const movie = useSelector(getMovieDetailsData);

    const navigate = useNavigate();

    const onEditMovie = useCallback(() => {
        if (movie) {
            navigate(getRouteMovieEdit(movie.id));
        }
    }, [movie, navigate]);

    if (!movie) {
        return null;
    }

    return (
        <Card padding="24" border="partial" className={cls.card}>
            <MovieAdditionalInfo
                onEdit={onEditMovie}
                author={movie.user}
                duration={movie.duration}
                movieRating={movie.movieRating}
            />
        </Card>
    );
});
