import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MovieListItemRedesigned.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { MovieListItemProps } from '../MovieListItem';
import { getRouteMovieDetails } from '@/shared/const/router';
import { MovieBlockType, MovieTextBlock, MovieView } from '../../..';

export const MovieListItemRedesigned = memo((props: MovieListItemProps) => {
    const { className, movie, view, target } = props;
    const { t } = useTranslation();

    const userInfo = (
        <>
            <Avatar size={32} src={movie.user.avatar} className={cls.avatar} />
            <Text bold text={movie.user.username} />
        </>
    );
    const movieRating = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text
                text={String(movie.movieRating)}
                className={cls.movieRating}
            />
        </HStack>
    );

    if (view === MovieView.BIG) {
        const textBlock = movie.blocks.find(
            (block) => block.type === MovieBlockType.TEXT,
        ) as MovieTextBlock;

        return (
            <Card
                padding="24"
                max
                data-testid="MovieListItem"
                className={classNames(cls.MovieListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <VStack max gap="16">
                    <HStack gap="8" max>
                        {userInfo}
                        <Text text={movie.duration} />
                    </HStack>
                    <Text title={movie.title} bold />
                    <Text title={movie.subtitle} size="s" />
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={movie.img}
                        className={cls.img}
                        alt={movie.title}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            className={cls.textBlock}
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                        />
                    )}
                    <HStack max justify="between">
                        <AppLink
                            target={target}
                            to={getRouteMovieDetails(movie.id)}
                        >
                            <Button variant="outline">
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {movieRating}
                    </HStack>
                </VStack>
            </Card>
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
            <Card className={cls.card} border="partial" padding="0">
                <AppImage
                    fallback={<Skeleton width="100%" height={200} />}
                    alt={movie.title}
                    src={movie.img}
                    className={cls.img}
                />
                <VStack className={cls.info} gap="4">
                    <Text title={movie.title} className={cls.title} />
                    <VStack gap="4" className={cls.footer} max>
                        <HStack justify="between" max>
                            <Text text={movie.duration} className={cls.date} />
                            {movieRating}
                        </HStack>
                        <HStack gap="4">{userInfo}</HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});
