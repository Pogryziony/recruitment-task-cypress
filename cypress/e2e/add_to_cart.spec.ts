import {ProductDetailsPage} from '../support/pages/product_details_page';
import {SearchPage} from '../support/pages/search_page';
import {cartSelectors} from "../support/selectors/cart_selectors";
import product from "../fixtures/products.json";
import {productDetailsSelectors} from "../support/selectors/product_details_selectors";
import {Navigation} from "../support/utils/navigation";

describe('Adding items to cart', () => {
    const searchPage = new SearchPage();
    const productDetailsPage = new ProductDetailsPage();
    const navigation = new Navigation();

    it('should select a product and navigate to its details page', () => {
        searchPage.selectProduct(product.name);
        cy.get(productDetailsSelectors.productTitle).should('contain', product.name);
        cy.title().should('include', 'Product Details');
    });

    it('should add the product to the shopping cart', () => {
        searchPage.selectProduct(product.name);
        productDetailsPage.addToCart();
        cy.get(cartSelectors.cartItemsContainer).should('contain', product.name);
    });

    it('should add multiple products to the shopping cart and check if those are added', () => {
        searchPage.selectProduct(product.name);
        productDetailsPage.addToCart();
        navigation.navigateToHomePage();
        searchPage.selectProduct(product.anotherName);
        productDetailsPage.addToCart();
        cy.get(cartSelectors.cartItemsContainer).first().should('contain', product.name);
        cy.get(cartSelectors.cartItemsContainer).eq(1).should('contain', product.anotherName);
    });
});
