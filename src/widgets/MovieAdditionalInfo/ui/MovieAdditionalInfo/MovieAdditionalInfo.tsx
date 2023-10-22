import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';

interface MovieAdditionalInfoProps {
    className?: string;
    author: User;
    duration: string;
    movieRating: number;
    onEdit: () => void;
}

export const MovieAdditionalInfo = memo((props: MovieAdditionalInfoProps) => {
    const { className, author, duration, movieRating, onEdit } = props;
    const { t } = useTranslation();

    return (
        <VStack gap="32" className={classNames('', {}, [className])}>
            <HStack gap="8">
                <Avatar src={author.avatar} size={32} />
                <Text text={author.username} bold />
                <Text text={duration} />
            </HStack>
            <Button onClick={onEdit}>{t('Редактировать')}</Button>
            <Text text={t('{{count}} просмотров', { count: movieRating })} />
        </VStack>
    );
});
