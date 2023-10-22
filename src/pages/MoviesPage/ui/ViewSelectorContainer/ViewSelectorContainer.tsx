import { memo } from 'react';
import { useMovieFilters } from '../../lib/hooks/useMovieFilters';
import { MovieViewSelector } from '@/features/MovieViewSelector';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo(
    (props: ViewSelectorContainerProps) => {
        const { className } = props;
        const { view, onChangeView } = useMovieFilters();

        return (
            <MovieViewSelector
                className={className}
                view={view}
                onViewClick={onChangeView}
            />
        );
    },
);
