import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MovieTypeTabs } from './MovieTypeTabs';

export default {
    title: 'features/MovieTypeTabs',
    component: MovieTypeTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MovieTypeTabs>;

const Template: ComponentStory<typeof MovieTypeTabs> = (args) => (
    <MovieTypeTabs {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
