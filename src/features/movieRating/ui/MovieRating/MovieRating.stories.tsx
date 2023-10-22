import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieRating from './MovieRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/MovieRating',
    component: MovieRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MovieRating>;

const Template: ComponentStory<typeof MovieRating> = (args) => (
    <MovieRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    movieId: '1',
};
Normal.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/movie-ratings?userId=1&movieId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
    movieId: '1',
};
WithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/movie-ratings?userId=1&movieId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
