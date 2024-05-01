import {productDetailsSelectors} from '../selectors/product_details_selectors';

export class ProductDetailsPage {

    addToCart() {
        cy.get(productDetailsSelectors.addToCartButton).click();
    }
}
