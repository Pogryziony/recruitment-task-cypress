import {HomePage} from '../support/pages/home_page';
import {SearchPage} from '../support/pages/search_page';
import products from '../fixtures/products.json';
import {searchSelectors} from "../support/selectors/search_selectors";
import {Navigation} from "../support/utils/navigation";


describe('Product search and filter', () => {
    const homePage = new HomePage();
    const searchPage = new SearchPage();
    const navigation = new Navigation();

    it('should search for products related to "electronics"', () => {
        navigation.navigateToHomePage();
        homePage.searchForProduct('electronics');
        cy.get(searchSelectors.searchResultsContainer).should('contain', 'electronics');
        cy.get(searchSelectors.productCategory).then(($categories) => {
            const categories = $categories.map((index, element) => Cypress.$(element).text()).get();
            const relevantSubcategories = ['laptops', 'tablets', 'smartphones', 'PCs'];
            const foundSubcategory = categories.some(category => relevantSubcategories.includes(category));
            expect(foundSubcategory).to.be.true;
        });
    });

    it('should apply filters to narrow down search results', () => {
        navigation.navigateToHomePage();
        homePage.searchForProduct('electronics');
        searchPage.applyPriceFilter(products.minPrice, products.maxPrice);
        searchPage.applyCategoryFilter(products.category);
        searchPage.applyBrandFilter(products.brand);
        searchPage.applyRatingFilter(products.minRating);
        cy.get(searchSelectors.productCategory).each(($el) => {
            cy.wrap($el).should('contain', products.category);
        });
        cy.get(searchSelectors.productPrice).each(($price) => {
            const price = parseFloat($price.text().replace('$', ''));
            expect(price).to.be.within(products.minPrice, products.maxPrice);
        });
        cy.get(searchSelectors.productBrand).each(($el) => {
            cy.wrap($el).should('contain', products.brand);
        });
        cy.get(searchSelectors.productRating).each(($rating) => {
            const rating = parseFloat($rating.text());
            expect(rating).to.be.at.least(products.minRating);
        });
    });
});
