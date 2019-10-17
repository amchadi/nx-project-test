import { getGreeting } from '../support/app.po';

describe('gestion-stock', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to gestion-stock!');
  });
});
