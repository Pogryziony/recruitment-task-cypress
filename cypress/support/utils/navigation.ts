import navigationData from '../../fixtures/navigation.json';

export class Navigation {
    navigateToLoginPage() {
        cy.visit(navigationData.loginUrl);
    }

    navigateToSignupPage() {
        cy.visit(navigationData.signupUrl);
    }

    navigateToHomePage() {
        cy.visit(navigationData.homeUrl);
    }
}