import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MovieViewSelector } from './MovieViewSelector';

export default {
    title: 'features/MovieViewSelector',
    component: MovieViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MovieViewSelector>;

const Template: ComponentStory<typeof MovieViewSelector> = (args) => (
    <MovieViewSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
