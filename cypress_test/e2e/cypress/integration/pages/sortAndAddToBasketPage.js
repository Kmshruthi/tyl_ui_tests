import SORTANDADDTOBASKETENUM from "../ENUMS/sortingFilterENUM"
import SORTANDADDTOBASKETDATA from "../data/sortingFilterData"

class sortAndAddToBasketAndCheckout {

    static sort_by_high_to_low() {
        cy.selectFromLabelDropdown("0", "hilo");
    }

    static select_cheapest_and_second_cheapest_item() {
        //Click on cheapest        
        cy.get(SORTANDADDTOBASKETENUM.ADD_TO_CART_BUTTON).then($elements => { cy.wrap($elements[$elements.length - 1]).click(); });
        //Click on second costliest item
        cy.get(SORTANDADDTOBASKETENUM.ADD_TO_CART_BUTTON).then($elements => { cy.wrap($elements[1]).click(); });
    }

    static click_on_basket_and_checkout() {
        //Click on basket icon
        cy.get(SORTANDADDTOBASKETENUM.SHOPPING_CART_CONTAINER).click();

        //Assert desired products are in basket
        cy.contains(SORTANDADDTOBASKETENUM.LOWEST_PRICE_ITEM).should("be.visible")
        cy.contains(SORTANDADDTOBASKETENUM.SECOND_HIGHEST_PRICE_ITEM).should("be.visible")      

        //click on the checkout
        cy.get(SORTANDADDTOBASKETENUM.CHECKOUT_BUTTON).click();
    }

    static enter_the_details_and_finish() {
        //enter first name
        cy
            .get(SORTANDADDTOBASKETENUM.FIRST_NAME)
            .click({
                force: true
            })
            .type(SORTANDADDTOBASKETDATA.first_name, { log: false })

        //enter last name
        cy
            .get(SORTANDADDTOBASKETENUM.LAST_NAME)
            .click({
                force: true
            })
            .type(SORTANDADDTOBASKETDATA.last_name, { log: false })

        //enter zipcode
        cy
            .get(SORTANDADDTOBASKETENUM.ZIP_CODE)
            .click({
                force: true
            })
            .type(SORTANDADDTOBASKETDATA.zip_code, { log: false })

        //click on continue button
        cy.findAllByText(SORTANDADDTOBASKETENUM.CONTINUE_BUTTON).eq(0).click()

        //checkout heading is seen
        cy.contains(SORTANDADDTOBASKETENUM.CHECKOUT_HEADING).should("be.visible")

        //Click on Finish button
        cy.findAllByText(SORTANDADDTOBASKETENUM.FINISH_BUTTON).eq(0).click()

        //checkout thank you heading is seen
        cy.contains(SORTANDADDTOBASKETENUM.THANK_YOU_MESSAGE).should("be.visible")
    }

}

export default sortAndAddToBasketAndCheckout;