import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MovieSortSelector } from './MovieSortSelector';

export default {
    title: 'features/MovieSortSelector',
    component: MovieSortSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MovieSortSelector>;

const Template: ComponentStory<typeof MovieSortSelector> = (args) => (
    <MovieSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
