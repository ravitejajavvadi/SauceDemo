    const Cartpage_Subtitle= "div.subheader";
    const Product_name="div.inventory_item_name";
    const Cart_img="#shopping_cart_container";
    const Product_Qty="div.cart_quantity";
    const Product_item_price="div.inventory_item_price";
    const CheckOut_button="a.btn_action.checkout_button";
    const Add_First_name="#first-name1";
    const Add_Last_name="#last-name";
    const Add_Zipcode="#postal-code";
    const Continue_button="input.btn_primary.cart_button";
    const Sumamry_Qty="div.summary_quantity";
    const Sumary_total_Value="div.summary_total_label";
    const finish_button="a.btn_action.cart_button"
    

    const firstname="bob";
    const lastname="steve"
    const zipcode="12345"
    let prod_name;
    let prod_qty;
    let prod_item_price;




class CartPageObj{
          
        static  VerifyProductDisplayInCArt(){
           cy.get(Cart_img).click()
           cy.get(Cartpage_Subtitle).should('contain.text','Your Cart')
           cy.get(Product_name).should('contain.text','Sauce Labs Backpack').then(($name)=>{
            prod_name=$name.text()
            cy.log('Product name::'+prod_name)
         })
              
        cy.get(Product_Qty).should('contain.text','1').then(($qty)=>{
              prod_qty= $qty.text()
             cy.log("Product Qty ::"+prod_qty)
           })

           cy.get(Product_item_price).should('contain.text','29.99')
           .then(($itemprice)=>{
             prod_item_price=$itemprice.text()
            cy.log("Product Item Price::"+prod_item_price)
           })

           
    }

    static ClickOnCheckoutOption(){
           cy.get(CheckOut_button).click()
    }

    static SubmitAddressDeails(){
           cy.get(Add_First_name).type(firstname)
           cy.get(Add_Last_name).type(lastname)
           cy.get(Add_Zipcode).type(zipcode)
           cy.get(Continue_button).click()
    }

    static VerifyCheckOutPageDetails(){
        cy.get(Product_name).should('contain.text',prod_name)
        cy.get(Sumamry_Qty).should('contain.text',prod_qty)
        cy.get(Product_item_price).should('contain.text',prod_item_price)
        cy.get(Sumary_total_Value).then(($totalValue)=>{
            const value=$totalValue.text();
            const total_invoice_value = value.match(/\$([\d.]+)/)[1];
            cy.log("total value:"+total_invoice_value)
            expect(total_invoice_value).to.not.empty

        })
        cy.get(finish_button).click()
      
    }



}
export default CartPageObj