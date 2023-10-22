import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SelectOption } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/sort';
import cls from './movieSortSelector.module.scss';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { MovieSortField } from '@/entities/Movie';

interface MovieSortSelectorProps {
    className?: string;
    sort: MovieSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: MovieSortField) => void;
}

export const MovieSortSelector = memo((props: MovieSortSelectorProps) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<SelectOption<MovieSortField>[]>(
        () => [
            {
                value: MovieSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: MovieSortField.TITLE,
                content: t('названию'),
            },
            {
                value: MovieSortField.movieRating,
                content: t('просмотрам'),
            },
        ],
        [t],
    );

    return (
        <div
            className={classNames(cls.movieSortSelectorRedesigned, {}, [
                className,
            ])}
        >
            <VStack gap="8">
                <Text text={t('Сортировать по')} />
                <ListBox
                    items={sortFieldOptions}
                    value={sort}
                    onChange={onChangeSort}
                />
                <ListBox
                    items={orderOptions}
                    value={order}
                    onChange={onChangeOrder}
                />
            </VStack>
        </div>
    );
});
