export enum AppRoutes {
    MAIN = 'main',
    SETTINGS = 'settings',
    ABOUT = 'about',
    PROFILE = 'profile',
    MOVIES = 'movies',
    MOVIE_DETAILS = 'movie_details',
    MOVIE_CREATE = 'movie_create',
    MOVIE_EDIT = 'movie_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteSettings = () => '/settings';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteMovies = () => '/movies';
export const getRouteMovieDetails = (id: string) => `/movies/${id}`;
export const getRouteMovieCreate = () => '/movies/new';
export const getRouteMovieEdit = (id: string) => `/movies/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteAbout()]: AppRoutes.ABOUT,
    [getRouteProfile(':id')]: AppRoutes.PROFILE,
    [getRouteMovies()]: AppRoutes.MOVIES,
    [getRouteMovieDetails(':id')]: AppRoutes.MOVIE_DETAILS,
    [getRouteMovieCreate()]: AppRoutes.MOVIE_CREATE,
    [getRouteMovieEdit(':id')]: AppRoutes.MOVIE_EDIT,
    [getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
