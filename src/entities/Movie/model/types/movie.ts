import { User } from '@/entities/User';
import { MovieBlockType, MovieType } from '../consts/movieConsts';

export interface MovieBlockBase {
    id: string;
    type: MovieBlockType;
}

export interface MovieImageBlock extends MovieBlockBase {
    type: MovieBlockType.IMAGE;
    src: string;
    title: string;
}

export interface MovieTextBlock extends MovieBlockBase {
    type: MovieBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type MovieBlock = MovieImageBlock | MovieTextBlock;

export interface Movie {
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    movieRating: number;
    duration: string;
    type: MovieType[];
    blocks: MovieBlock[];
}
