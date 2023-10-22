import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { MovieRatingProps } from './MovieRating';

const MovieRatingLazy = lazy(() => import('./MovieRating'));

export const MovieRatingAsync = (props: MovieRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <MovieRatingLazy {...props} />
        </Suspense>
    );
};
