import { getGreeting } from '../support/app.po';

describe('gestion-employer', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to gestion-employer!');
  });
});
