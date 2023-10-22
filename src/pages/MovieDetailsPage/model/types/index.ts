import { MovieDetailsCommentsSchema } from './MovieDetailsCommentsSchema';
import { MovieDetailsRecommendationsSchema } from '../../../MovieDetailsPage/index';

export interface MovieDetailsPageSchema {
    comments: MovieDetailsCommentsSchema;
    recommendations: MovieDetailsRecommendationsSchema;
}
