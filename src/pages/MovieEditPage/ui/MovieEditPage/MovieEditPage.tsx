import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MovieEditPage.module.scss';

interface MovieEditPageProps {
    className?: string;
}

const MovieEditPage = memo((props: MovieEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.MovieEditPage, {}, [className])}>
            {isEdit
                ? t('Редактирование фильма с ID = ') + id
                : t('Добавление нового фильма')}
        </Page>
    );
});

export default MovieEditPage;
