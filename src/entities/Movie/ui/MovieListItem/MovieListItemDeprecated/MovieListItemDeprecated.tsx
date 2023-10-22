import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from '../MovieListItem.module.scss';
import { Text } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { getRouteMovieDetails } from '@/shared/const/router';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { MovieListItemProps } from '../MovieListItem';
import {
    MovieBlockType,
    MovieTextBlock,
    MovieTextBlockComponent,
    MovieView,
} from '../../..';

export const MovieListItemDeprecated = memo((props: MovieListItemProps) => {
    const { className, movie, view, target } = props;
    const { t } = useTranslation();

    const types = <Text text={movie.type.join(', ')} className={cls.types} />;
    const movieRating = (
        <>
            <Text
                text={String(movie.movieRating)}
                className={cls.movieRating}
            />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === MovieView.BIG) {
        const textBlock = movie.blocks.find(
            (block) => block.type === MovieBlockType.TEXT,
        ) as MovieTextBlock;

        return (
            <div
                data-testid="MovieListItem"
                className={classNames(cls.MovieListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={movie.user.avatar} />
                        <Text
                            text={movie.user.username}
                            className={cls.username}
                        />
                        <Text text={movie.duration} className={cls.date} />
                    </div>
                    <Text title={movie.title} className={cls.title} />
                    {types}
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={movie.img}
                        className={cls.img}
                        alt={movie.title}
                    />
                    {textBlock && (
                        <MovieTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={getRouteMovieDetails(movie.id)}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {movieRating}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            data-testid="MovieListItem"
            target={target}
            to={getRouteMovieDetails(movie.id)}
            className={classNames(cls.MovieListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        alt={movie.title}
                        src={movie.img}
                        className={cls.img}
                    />
                    <Text text={movie.duration} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {movieRating}
                </div>
                <Text text={movie.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});
