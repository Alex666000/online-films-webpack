import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';
import { MovieType } from '@/entities/Movie';

interface MovieTypeTabsProps {
    className?: string;
    value: MovieType;
    onChangeType: (type: MovieType) => void;
}

export const MovieTypeTabs = memo((props: MovieTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: MovieType.ALL,
                content: t('Все фильмы'),
            },
            {
                value: MovieType.COMEDY,
                content: t('Комедия'),
            },
            {
                value: MovieType.FANTASY,
                content: t('Драма'),
            },
            {
                value: MovieType.DRAMA,
                content: t('Фантастика'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as MovieType);
        },
        [onChangeType],
    );

    return (
        <Tabs
            direction="column"
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
});
