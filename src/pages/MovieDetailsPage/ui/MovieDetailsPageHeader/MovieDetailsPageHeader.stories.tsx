import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { MovieDetailsPageHeader } from './MovieDetailsPageHeader';

export default {
    title: 'pages/movieDetailsPage/movieDetailsPageHeader',
    component: MovieDetailsPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MovieDetailsPageHeader>;

const Template: ComponentStory<typeof MovieDetailsPageHeader> = (args) => (
    <MovieDetailsPageHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
