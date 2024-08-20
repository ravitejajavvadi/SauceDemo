import {Given,When,Then} from "cypress-cucumber-preprocessor/resolveStepDefinition"

import HomePageObj from "../Pages/HomePageObj"
import CartPageObj from "../Pages/CartPageObj"

Then('Selected Products Display in the cartpage',()=>{
    CartPageObj.VerifyProductDisplayInCArt()
})

When('User Select the CheckOut Option In Cart page',()=>{
    CartPageObj.ClickOnCheckoutOption()
})

And('User Submit the Address Details',()=>{
    CartPageObj.SubmitAddressDeails()
})

Then('User Should see the Order Success Message',()=>{
    CartPageObj.VerifyCheckOutPageDetails()
})
