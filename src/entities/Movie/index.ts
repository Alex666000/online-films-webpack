export type { Movie } from './model/types/movie';
export type { MovieTextBlock } from './model/types/movie';
export type { MovieImageBlock } from './model/types/movie';
export type { MovieBlock } from './model/types/movie';
export type { MovieDetailsSchema } from './model/types/movieDetailsSchema';

export {
    MovieView,
    MovieType,
    MovieSortField,
    MovieBlockType,
} from './model/consts/movieConsts';
export { movieDetailsSlice } from './model/slice/movieDetailsSlice';
export { MovieImageBlockComponent } from './ui/MovieImageBlockComponent/MovieImageBlockComponent';
export { MovieTextBlockComponent } from './ui/MovieTextBlockComponent/MovieTextBlockComponent';
