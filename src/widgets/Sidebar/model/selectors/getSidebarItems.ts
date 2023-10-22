import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/home.svg';
import MovieIcon from '@/shared/assets/icons/movie.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';

import { SidebarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteMain,
    getRouteMovies,
    getRouteProfile,
} from '@/shared/const/router';

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: 'О сайте',
        },
    ];

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: getRouteMovies(),
                Icon: MovieIcon,
                text: 'Фильмы',
                authOnly: true,
            },
        );
    }

    return sidebarItemsList;
};
