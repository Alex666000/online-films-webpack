import { Movie } from '@/entities/Movie';

const defaultMovie = {
    title: 'TESTING movie',
    subtitle: 'БиологиЯ',
    img:
        'https://avatars.mds.yandex.net/get-zen_doc/2746556/pub_5f50dd' +
        '7e1a1ddf4776aa5569_5f50decd2506f211d1de6284/scale_1200',
    movieRating: 1022,
    duration: '26.02.2022',
    userId: '1',
    type: ['SCIENCE'],
    blocks: [],
};

export const createMovie = (movie?: Movie) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/movies',
            headers: { Authorization: 'asasf' },
            body: movie ?? defaultMovie,
        })
        .then((resp) => resp.body);
};

export const removeMovie = (movieId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/movies/${movieId}`,
        headers: { Authorization: 'asasf' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createMovie(movie?: Movie): Chainable<Movie>;
            removeMovie(movieId: string): Chainable<void>;
        }
    }
}
