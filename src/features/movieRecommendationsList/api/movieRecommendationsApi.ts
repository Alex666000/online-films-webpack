import { rtkApi } from '@/shared/api/rtkApi';
import { Movie } from '@/entities/Movie';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getMovieRecommendationsList: build.query<Movie[], number>({
            query: (limit) => ({
                url: '/movies',
                params: {
                    _limit: limit,
                    _expand: 'user',
                },
            }),
        }),
    }),
});

export const useMovieRecommendationsList =
    recommendationsApi.useGetMovieRecommendationsListQuery;
