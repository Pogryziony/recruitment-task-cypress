import {LoginPage} from '../support/pages/login_page';
import {SignupPage} from '../support/pages/signup_page';
import {Navigation} from "../support/utils/navigation";
import {signupSelectors} from "../support/selectors/signup_selectors";
import user from "../fixtures/user.json";
import  navigation  from "../fixtures/navigation.json"

describe('User registration and login', () => {
    const signupPage = new SignupPage();
    const loginPage = new LoginPage();
    const navigationUtil = new Navigation();

    it('should navigate to the signup page and verify', () => {
        navigationUtil.navigateToSignupPage();
        cy.title().should('eq', 'Signup Page');
    });

    it('should create a new user account with valid credentials', () => {
        navigationUtil.navigateToSignupPage();
        signupPage.fillSignupForm(user.uniqueUsername, user.email, user.password);
        signupPage.submitForm();
        cy.url().should('include', '/login');
    });

    it('should not allow creating an account with existing credentials', () => {
        navigationUtil.navigateToSignupPage();
        signupPage.fillSignupForm(user.existingUsername, user.email, user.password);
        signupPage.submitForm();
        cy.get(signupSelectors.errorMessage).should('contain', 'Username or email already exists');
    });

    it('should not allow creating an account with invalid data', () => {
        navigationUtil.navigateToSignupPage();
        signupPage.fillSignupForm(user.invalidUsername, user.invalidEmail, user.invalidPassword);
        signupPage.submitForm();
        cy.get(signupSelectors.errorMessage).should('contain', 'Invalid email format');
    });

    it('should login with the newly created credentials', () => {
        navigationUtil.navigateToLoginPage();
        loginPage.login(user.uniqueUsername, user.password);
        cy.url().should('eq', navigation.baseUrl+navigation.homeUrl);
    });
});
