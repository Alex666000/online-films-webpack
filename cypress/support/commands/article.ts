import { movie } from '../../../src/entities/movie';

const defaultmovie = {
    title: 'TESTING movie',
    subtitle: 'БиологиЯ',
    img:
        'https://avatars.mds.yandex.net/get-zen_doc/2746556/pub_5f50dd' +
        '7e1a1ddf4776aa5569_5f50decd2506f211d1de6284/scale_1200',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['SCIENCE'],
    blocks: [],
};

export const createmovie = (movie?: movie) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/movies',
            headers: { Authorization: 'asasf' },
            body: movie ?? defaultmovie,
        })
        .then((resp) => resp.body);
};

export const removemovie = (movieId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/movies/${movieId}`,
        headers: { Authorization: 'asasf' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createmovie(movie?: movie): Chainable<movie>;
            removemovie(movieId: string): Chainable<void>;
        }
    }
}
