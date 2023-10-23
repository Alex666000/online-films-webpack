import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { MovieView } from '@/entities/Movie';
import cls from './MovieViewSelector.module.scss';

interface MovieViewSelectorProps {
    className?: string;
    view: MovieView;
    onViewClick?: (view: MovieView) => void;
}

const viewTypes = [
    {
        view: MovieView.SMALL,
        icon: TiledIcon,
    },
    {
        view: MovieView.BIG,
        icon: ListIcon,
    },
];

export const MovieViewSelector = memo((props: MovieViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: MovieView) => () => {
        onViewClick?.(newView);
    };

    return (
        <Card
            className={classNames(cls.MovieViewSelectorRedesigned, {}, [
                className,
            ])}
            border="round"
        >
            <HStack gap="8">
                {viewTypes.map((viewType) => (
                    <Icon
                        clickable
                        key={viewType.view}
                        onClick={onClick(viewType.view)}
                        Svg={viewType.icon}
                        className={classNames('', {
                            [cls.notSelected]: viewType.view !== view,
                        })}
                    />
                ))}
            </HStack>
        </Card>
    );
});
