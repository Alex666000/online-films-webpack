let currentMovieId = '';
describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createMovie().then((movie) => {
            currentMovieId = movie.id;
            cy.visit(`movies/${movie.id}`);
        });
    });
    afterEach(() => {
        cy.removeMovie(currentMovieId);
    });
    it('И видит содержимое статьи', () => {
        cy.getByTestId('MovieDetails.Info').should('exist');
    });
    it('И видит список рекоммендаций', () => {
        cy.getByTestId('MovieRecommendationsList').should('exist');
    });
    it('И оставляет комментарий', () => {
        cy.getByTestId('MovieDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('И ставит оценку', () => {
        cy.getByTestId('MovieDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
    it('И ставит оценку (пример с стабом на фикстурах)', () => {
        cy.intercept('GET', '**/movies/*', {
            fixture: 'movie-details.json',
        });
        cy.getByTestId('MovieDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
