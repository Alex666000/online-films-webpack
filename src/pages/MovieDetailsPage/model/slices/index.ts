import { combineReducers } from '@reduxjs/toolkit';
import { MovieDetailsPageSchema } from '../types';
import { movieDetailsPageRecommendationsReducer } from './movieDetailsPageRecommendationsSlice';
import { movieDetailsCommentsReducer } from './movieDetailsCommentsSlice';

export const movieDetailsPageReducer = combineReducers<MovieDetailsPageSchema>({
    recommendations: movieDetailsPageRecommendationsReducer,
    comments: movieDetailsCommentsReducer,
});
