describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            cy.visit('movies');
        });
    });
    it('и фильмы успешно подгружаются', () => {
        cy.getByTestId('movieList').should('exist');
        cy.getByTestId('movieListItem').should('have.length.greaterThan', 3);
    });

    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/movies?*', { fixture: 'movies.json' });
        cy.getByTestId('movieList').should('exist');
        cy.getByTestId('movieListItem').should('have.length.greaterThan', 3);
    });

    it.skip('Пример заскипанного теста', () => {
        cy.getByTestId('movieList').should('exist');
        cy.getByTestId('movieListItem').should('have.length.greaterThan', 3);
        cy.get('asfasf').should('exist');
    });
});
