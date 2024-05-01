import {signupSelectors} from "../selectors/signup_selectors";

export class SignupPage {
    fillSignupForm(username: string, email: string, password: string) {
        cy.get(signupSelectors.usernameInput).type(username);
        cy.get(signupSelectors.emailInput).type(email);
        cy.get(signupSelectors.passwordInput).type(password);
    }

    submitForm() {
        cy.get(signupSelectors.submitButton).click();
    }
}
