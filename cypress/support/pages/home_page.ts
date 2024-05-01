import {homeSelectors} from '../selectors/home_selectors';

export class HomePage {

    searchForProduct(keyword: string) {
        cy.get(homeSelectors.searchInput).type(keyword);
        cy.get(homeSelectors.searchButton).click();
    }
}