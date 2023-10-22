import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './MovieImageBlockComponent.module.scss';
import { MovieImageBlock } from '../../model/types/movie';

interface MovieImageBlockComponentProps {
    className?: string;
    block: MovieImageBlock;
}

export const MovieImageBlockComponent = memo(
    (props: MovieImageBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return (
            <div
                className={classNames(cls.MovieImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block.src} alt={block.title} className={cls.img} />
                {block.title && <Text text={block.title} align="center" />}
            </div>
        );
    },
);
