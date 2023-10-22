import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import {
    getMovieDetailsData,
    getMovieDetailsError,
    getMovieDetailsIsLoading,
} from '../../model/selectors/movieDetails';
import { movieDetailsReducer } from '../../testing';
import { renderMovieBlock } from './renderBlock';
import { fetchMovieById } from '../../model/services/fetchMovieById/fetchMovieById';
import cls from './MovieDetails.module.scss';

interface MovieDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    movieDetails: movieDetailsReducer,
};

const Deprecated = () => {
    const movie = useSelector(getMovieDetailsData);
    return (
        <>
            <HStack justify="center" max className={cls.avatarWrapper}>
                <Avatar size={200} src={movie?.img} className={cls.avatar} />
            </HStack>
            <VStack gap="4" max data-testid="MovieDetails.Info">
                <TextDeprecated
                    className={cls.title}
                    title={movie?.title}
                    text={movie?.subtitle}
                    size={TextSize.L}
                />
                <HStack gap="8" className={cls.movieInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon} />
                    <TextDeprecated text={String(movie?.movieRating)} />
                </HStack>
                <HStack gap="8" className={cls.movieInfo}>
                    <Icon className={cls.icon} Svg={CalendarIcon} />
                    <TextDeprecated text={movie?.duration} />
                </HStack>
            </VStack>
            {movie?.blocks.map(renderMovieBlock)}
        </>
    );
};

const Redesigned = () => {
    const movie = useSelector(getMovieDetailsData);

    return (
        <>
            <Text title={movie?.title} size="l" bold />
            <Text title={movie?.subtitle} />
            <AppImage
                fallback={
                    <SkeletonRedesigned
                        width="100%"
                        height={420}
                        border="16px"
                    />
                }
                src={movie?.img}
                className={cls.img}
            />
            {movie?.blocks.map(renderMovieBlock)}
        </>
    );
};

export const MovieDetailsSkeleton = () => {
    const Skeleton = SkeletonRedesigned;
    return (
        <VStack gap="16" max>
            <Skeleton
                className={cls.avatar}
                width={200}
                height={200}
                border="50%"
            />
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
            <Skeleton className={cls.skeleton} width="100%" height={200} />
        </VStack>
    );
};

export const MovieDetails = memo((props: MovieDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getMovieDetailsIsLoading);
    const error = useSelector(getMovieDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchMovieById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = <MovieDetailsSkeleton />;
    } else if (error) {
        content = (
            <TextDeprecated
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке фильма.')}
            />
        );
    } else {
        content = <Redesigned />;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                max
                className={classNames(cls.MovieDetails, {}, [className])}
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
