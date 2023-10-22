import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getMovieDetailsData } from '@/entities/Movie/model/selectors/movieDetails';

export const getCanEditMovie = createSelector(
    getMovieDetailsData,
    getUserAuthData,
    (movie, user) => {
        if (!movie || !user) {
            return false;
        }

        return movie.user.id === user.id;
    },
);
