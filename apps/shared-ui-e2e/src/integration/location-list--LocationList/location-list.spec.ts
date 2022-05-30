describe('shared-ui: LocationList component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=locationlist--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to LocationList!');
  });
});
