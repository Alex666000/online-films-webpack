import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MovieListItem } from './MovieListItem';
import { Movie, MovieView } from '../../index';

export default {
    title: 'entities/Movie/MovieListItem',
    component: MovieListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MovieListItem>;

const Template: ComponentStory<typeof MovieListItem> = (args) => (
    <MovieListItem {...args} />
);

const movie = {
    id: '1',
    title: 'Робокоп',
    subtitle: 'Что нового в фильме',
    img: 'data:image/jpeg;base64,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',
    movieRating: 1022,
    duration: '345 минут',
    user: {
        id: '1',
        username: 'Alex666000',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFs3feAS1kpXd6SAB7wJK20OXtZwZ0ammZA&usqp=CAU',
    },
    type: ['COMEDY', 'DRAMA', 'FANTASY'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                '"Робокоп" (англ. "RoboCop") — это американский научно-фантастический боевик, оригинальная версия которого была выпущена в 1987 году, а также впоследствии получила несколько продолжений, ремейков и адаптаций. Фильм рассказывает историю офицера полиции, который после трагического инцидента превращается в киборга-полицейского, созданного корпорацией OCP (Omni Consumer Products), чтобы бороться со злом и преступностью в будущем Детройте.\n' +
                    '\n' +
                    'Вот краткое описание оригинального фильма "Робокоп" (1987):\n' +
                    '\n' +
                    '**Сюжет:**\n' +
                    'Действие происходит в близком будущем, в городе Детройт, который стал одним из самых опасных и коррумпированных мест в США. Алекс Мерфи — честный полицейский, работающий на улицах Детройта. После того, как он становится жертвой тяжелой атаки преступников, он признан мертвым, но его тело становится объектом эксперимента корпорации OCP. Путем совмещения остатков его человеческой природы с механическими компонентами он превращается в "Робокопа", мощного и неуязвимого киборга-полицейского.\n' +
                    '\n' +
                    'Робокоп вступает в борьбу с преступностью и коррупцией в городе, разгадывая интриги внутри OCP и сталкиваясь с мощным преступным синдикатом, управляемым бывшим членом OCP. Фильм сочетает в себе элементы научной фантастики, боевика и социокритики, а также исследует вопросы искусственного интеллекта, этики и человечности.\n' +
                    '\n' +
                    '"Робокоп" оказался культовым фильмом, и он получил признание за спецэффекты, актерскую игру и содержание. Этот фильм не только стал первой частью франшизы "Робокоп", но и оставил глубокий след в кино и культуре.',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                '"Робокоп" (англ. "RoboCop") — это американский научно-фантастический боевик, оригинальная версия которого была выпущена в 1987 году, а также впоследствии получила несколько продолжений, ремейков и адаптаций. Фильм рассказывает историю офицера полиции, который после трагического инцидента превращается в киборга-полицейского, созданного корпорацией OCP (Omni Consumer Products), чтобы бороться со злом и преступностью в будущем Детройте.\n' +
                    '\n' +
                    'Вот краткое описание оригинального фильма "Робокоп" (1987):\n' +
                    '\n' +
                    '**Сюжет:**\n' +
                    'Действие происходит в близком будущем, в городе Детройт, который стал одним из самых опасных и коррумпированных мест в США. Алекс Мерфи — честный полицейский, работающий на улицах Детройта. После того, как он становится жертвой тяжелой атаки преступников, он признан мертвым, но его тело становится объектом эксперимента корпорации OCP. Путем совмещения остатков его человеческой природы с механическими компонентами он превращается в "Робокопа", мощного и неуязвимого киборга-полицейского.\n' +
                    '\n' +
                    'Робокоп вступает в борьбу с преступностью и коррупцией в городе, разгадывая интриги внутри OCP и сталкиваясь с мощным преступным синдикатом, управляемым бывшим членом OCP. Фильм сочетает в себе элементы научной фантастики, боевика и социокритики, а также исследует вопросы искусственного интеллекта, этики и человечности.\n' +
                    '\n' +
                    '"Робокоп" оказался культовым фильмом, и он получил признание за спецэффекты, актерскую игру и содержание. Этот фильм не только стал первой частью франшизы "Робокоп", но и оставил глубокий след в кино и культуре.',
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                '"Робокоп" (англ. "RoboCop") — это американский научно-фантастический боевик, оригинальная версия которого была выпущена в 1987 году, а также впоследствии получила несколько продолжений, ремейков и адаптаций. Фильм рассказывает историю офицера полиции, который после трагического инцидента превращается в киборга-полицейского, созданного корпорацией OCP (Omni Consumer Products), чтобы бороться со злом и преступностью в будущем Детройте.\n' +
                    '\n' +
                    'Вот краткое описание оригинального фильма "Робокоп" (1987):\n' +
                    '\n' +
                    '**Сюжет:**\n' +
                    'Действие происходит в близком будущем, в городе Детройт, который стал одним из самых опасных и коррумпированных мест в США. Алекс Мерфи — честный полицейский, работающий на улицах Детройта. После того, как он становится жертвой тяжелой атаки преступников, он признан мертвым, но его тело становится объектом эксперимента корпорации OCP. Путем совмещения остатков его человеческой природы с механическими компонентами он превращается в "Робокопа", мощного и неуязвимого киборга-полицейского.\n' +
                    '\n' +
                    'Робокоп вступает в борьбу с преступностью и коррупцией в городе, разгадывая интриги внутри OCP и сталкиваясь с мощным преступным синдикатом, управляемым бывшим членом OCP. Фильм сочетает в себе элементы научной фантастики, боевика и социокритики, а также исследует вопросы искусственного интеллекта, этики и человечности.\n' +
                    '\n' +
                    '"Робокоп" оказался культовым фильмом, и он получил признание за спецэффекты, актерскую игру и содержание. Этот фильм не только стал первой частью франшизы "Робокоп", но и оставил глубокий след в кино и культуре.',
            ],
        },
    ],
} as Movie;

export const Big = Template.bind({});
Big.args = {
    view: MovieView.BIG,
    movie,
};

export const Small = Template.bind({});
Small.args = {
    view: MovieView.SMALL,
    movie,
};
