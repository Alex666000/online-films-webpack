import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';
import { MovieDetails } from '../../../../entities/Movie/ui/MovieDetails/MovieDetails';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <Card fullWidth border="partial" className={className} padding="24">
            <MovieDetails id={id} />
        </Card>
    );
});
