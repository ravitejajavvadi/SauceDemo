/// <reference types="Cypress"/>
   const Login_user_name="#user-name";
   const Login_Pwd="#password";
   const Login_submit_button="#login-button";
   const Homepage_Products_header_label='div.product_label'
   
   
class LoginpageObj{
   
    static LaunchURL(url){
        cy.visit("https://www.saucedemo.com/v1/index.html")
             
    }

    static submit_Username_PWd(){
        cy.get(Login_user_name).type("standard_user");
        cy.get(Login_Pwd).type("secret_sauce");
        
    }

     static SubmitLoginbutton(){
        cy.get(Login_submit_button).click()
    }

     static VerifyTitleofHomePage(){
        cy.wait(2000)
        cy.get(Homepage_Products_header_label).should('contain.text','Products')
      }

      static TearDown(){
        cy.closest()
      }


}
export default LoginpageObj