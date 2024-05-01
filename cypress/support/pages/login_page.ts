import {loginSelectors} from "../selectors/login_selectors";

export class LoginPage {

    login(email: string, password: string) {
        cy.get(loginSelectors.emailInput).type(email);
        cy.get(loginSelectors.passwordInput).type(password);
        cy.get(loginSelectors.submitButton).click();
    }
}
