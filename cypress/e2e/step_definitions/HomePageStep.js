import {Given,When,Then} from "cypress-cucumber-preprocessor/resolveStepDefinition"

import HomePageObj from "../Pages/HomePageObj"
// import CartPageObj from "../Pages/CartPageObj"

When('User Add the Products to the Cart',()=>{
       HomePageObj.VerifyProductAddtoTheCart()
       HomePageObj.VerifyCartCountIncrement()
})


And('User Click on Reset App Station Option',()=>{
    HomePageObj.ClickOnResetAppOption()
})
