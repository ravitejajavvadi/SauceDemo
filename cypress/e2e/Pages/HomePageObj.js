   const Homepage_AddtoCart_button="button.btn_primary.btn_inventory";
   const Homepage_Shopping_Cart_img="span.fa-layers-counter.shopping_cart_badge";
   const Homepage_burger_button="div.bm-burger-button";
   const Homepgae_Reset_App_State_Option="#reset_sidebar_link"
   const Homepage_burger_close_Option="div.bm-cross-button"
   

class HomePageObj{
      
   
   static VerifyProductAddtoTheCart(){
        cy.get(Homepage_AddtoCart_button).first().click()

   }

   static VerifyCartCountIncrement(){
         cy.get(Homepage_Shopping_Cart_img).invoke('text').then(parseInt).should('be.gte',1)
   }

   static ClickOnResetAppOption(){
          cy.get(Homepage_burger_button).click()
          cy.get(Homepgae_Reset_App_State_Option).click()
          cy.get(Homepage_burger_close_Option).click()
         
   }
   
   

}
export default HomePageObj