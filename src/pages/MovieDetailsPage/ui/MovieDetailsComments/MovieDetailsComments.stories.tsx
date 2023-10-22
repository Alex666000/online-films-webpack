import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { MovieDetailsComments } from './MovieDetailsComments';

export default {
    title: 'pages/MovieDetailsPage/MovieDetailsComments',
    component: MovieDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MovieDetailsComments>;

const Template: ComponentStory<typeof MovieDetailsComments> = (args) => (
    <MovieDetailsComments {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    id: '1',
};
Normal.decorators = [StoreDecorator({})];
