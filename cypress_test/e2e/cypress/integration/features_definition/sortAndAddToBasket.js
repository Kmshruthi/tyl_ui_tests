import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import sortAndAddToBasketPage from '../pages/sortAndAddToBasketPage';

Then(/^in the landing page sort the products by Price high to low$/, () => {
    sortAndAddToBasketPage.sort_by_high_to_low()
});

Then(/The cheapest & the 2nd costliest products to your basket$/, () => {
    sortAndAddToBasketPage.select_cheapest_and_second_cheapest_item()
});

Then(/^click on basket and checkout$/, () => {
    sortAndAddToBasketPage.click_on_basket_and_checkout()
});

Then(/^Enter details and Finish the purchase$/, () => {
    sortAndAddToBasketPage.enter_the_details_and_finish()
});

