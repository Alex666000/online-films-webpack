import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdmin,
    getRouteForbidden,
    getRouteMain,
    getRouteMovieCreate,
    getRouteMovieDetails,
    getRouteMovieEdit,
    getRouteMovies,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { SettingsPage } from '@/pages/SettingsPage';
import { MoviesPage } from '@/pages/MoviesPage';
import { MovieDetailsPage } from '@/pages/MovieDetailsPage';
import { MovieEditPage } from '@/pages/MovieEditPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        element: <SettingsPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.MOVIES]: {
        path: getRouteMovies(),
        element: <MoviesPage />,
        authOnly: true,
    },
    [AppRoutes.MOVIE_DETAILS]: {
        path: getRouteMovieDetails(':id'),
        element: <MovieDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.MOVIE_CREATE]: {
        path: getRouteMovieCreate(),
        element: <MovieEditPage />,
        authOnly: true,
    },
    [AppRoutes.MOVIE_EDIT]: {
        path: getRouteMovieEdit(':id'),
        element: <MovieEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdmin(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
