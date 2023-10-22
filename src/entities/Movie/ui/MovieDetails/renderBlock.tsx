import cls from './MovieDetails.module.scss';
import {
    MovieBlock,
    MovieBlockType,
    MovieImageBlockComponent,
    MovieTextBlockComponent,
} from '@/entities/Movie';

export const renderMovieBlock = (block: MovieBlock) => {
    switch (block.type) {
        case MovieBlockType.IMAGE:
            return (
                <MovieImageBlockComponent
                    key={block.id}
                    block={block}
                    className={cls.block}
                />
            );
        case MovieBlockType.TEXT:
            return (
                <MovieTextBlockComponent
                    key={block.id}
                    className={cls.block}
                    block={block}
                />
            );
        default:
            return null;
    }
};
