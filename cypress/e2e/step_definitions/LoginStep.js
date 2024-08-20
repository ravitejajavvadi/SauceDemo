import {Given,When,Then} from "cypress-cucumber-preprocessor/resolveStepDefinition"
import LoginpageObj from "../Pages/LoginPageObj"


Given('User navigate to the application',()=>{

   LoginpageObj.LaunchURL()
   
})

When('User enters Valid Username and Password',()=>{
    LoginpageObj.submit_Username_PWd()
})

And('Click on Submit button',()=>{
    LoginpageObj.SubmitLoginbutton()
})

Then('User Successfully Redirect to the home page',()=>{
    LoginpageObj.VerifyTitleofHomePage()

})