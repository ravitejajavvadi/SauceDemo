Feature: Verify Order Generated Feature

  Scenario: Verify User is able to Login with Valid Credentials
    Given User navigate to the application
    When User enters Valid Username and Password
    And Click on Submit button
    Then User Successfully Redirect to the home page

  Scenario: Verify User is able to Add item to the Cart
    Given User navigate to the application
    When User enters Valid Username and Password
    And Click on Submit button
    Then User Successfully Redirect to the home page
    When User Add the Products to the Cart
    Then Selected Products Display in the cartpage

  Scenario: Verify User is able to Place Order
    Given User navigate to the application
    When User enters Valid Username and Password
    And  Click on Submit button
    Then User Successfully Redirect to the home page
    And User Click on Reset App Station Option
    When User Add the Products to the Cart
    Then Selected Products Display in the cartpage
    When User Select the CheckOut Option In Cart page
    And User Submit the Address Details
    Then User Should see the Order Success Message
