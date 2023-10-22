import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
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
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledIcon,
            off: () => TiledIconDeprecated,
        }),
    },
    {
        view: MovieView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
];

export const MovieViewSelector = memo((props: MovieViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: MovieView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
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
            }
            off={
                <div
                    className={classNames(cls.MovieViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            key={viewType.view}
                            theme={ButtonTheme.CLEAR}
                            onClick={onClick(viewType.view)}
                        >
                            <IconDeprecated
                                width={24}
                                height={24}
                                Svg={viewType.icon}
                                className={classNames('', {
                                    [cls.notSelected]: viewType.view !== view,
                                })}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
});
