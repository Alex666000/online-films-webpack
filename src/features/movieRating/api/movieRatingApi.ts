import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface GetMovieRatingArg {
    userId: string;
    movieId: string;
}

interface RateMovieArg {
    userId: string;
    movieId: string;
    rate: number;
    feedback?: string;
}

const movieRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getMovieRating: build.query<Rating[], GetMovieRatingArg>({
            query: ({ movieId, userId }) => ({
                url: '/movie-ratings',
                params: {
                    userId,
                    movieId,
                },
            }),
        }),
        rateMovie: build.mutation<void, RateMovieArg>({
            query: (arg) => ({
                url: '/movie-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetMovieRating = movieRatingApi.useGetMovieRatingQuery;
export const useRateMovie = movieRatingApi.useRateMovieMutation;
