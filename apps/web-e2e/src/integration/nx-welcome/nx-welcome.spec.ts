describe('web: NxWelcome component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcome--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to NxWelcome!');
  });
});
