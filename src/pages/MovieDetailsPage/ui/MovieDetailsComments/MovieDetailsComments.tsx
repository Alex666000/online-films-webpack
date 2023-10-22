import { useTranslation } from 'react-i18next';
import { memo, useCallback, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { getMovieCommentsIsLoading } from '../../model/selectors/comments';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentForMovie } from '../../model/services/addCommentForMovie/addCommentForMovie';
import { fetchCommentsByMovieId } from '../../model/services/fetchCommentsByMovieId/fetchCommentsByMovieId';
import { getMovieComments } from '../../model/slices/movieDetailsCommentsSlice';

interface MovieDetailsCommentsProps {
    className?: string;
    id?: string;
}

export const MovieDetailsComments = memo((props: MovieDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const comments = useSelector(getMovieComments.selectAll);
    const commentsIsLoading = useSelector(getMovieCommentsIsLoading);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForMovie(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByMovieId(id));
    });

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            <Text size="l" title={t('Комментарии')} />
            <Suspense fallback={<Loader />}>
                <AddCommentForm onSendComment={onSendComment} />
            </Suspense>
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
    );
});
