import { EntityState } from '@reduxjs/toolkit';
import { Movie } from '@/entities/Movie';

export interface MovieDetailsRecommendationsSchema extends EntityState<Movie> {
    isLoading?: boolean;
    error?: string;
}
