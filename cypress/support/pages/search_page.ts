import {searchSelectors} from '../selectors/search_selectors';

export class SearchPage {

    applyPriceFilter(minPrice: number, maxPrice: number) {
        cy.get(searchSelectors.priceFilterMinInput).type(minPrice.toString());
        cy.get(searchSelectors.priceFilterMaxInput).type(maxPrice.toString());
    }

    applyCategoryFilter(category: string) {
        cy.get(searchSelectors.categoryFilterDropdown).select(category);
    }

    applyBrandFilter(brand: string) {
        cy.get(searchSelectors.brandFilterDropdown).select(brand);
    }

    applyRatingFilter(minRating: number) {
        cy.get(searchSelectors.ratingFilterDropdown).select(minRating.toString());
    }

    selectProduct(productName: string) {
        cy.contains(searchSelectors.productLink, productName).click();
    }
}
