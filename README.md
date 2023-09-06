# Build a Shopping Cart and Securely Embed Payments in a ReactJS App

This is a JavaScript application that uses the React framework and Node.js to demonstrate an ecommerce shopping cart with an embedded payment solution using [Payments Hub's Browser Post API](https://developer.paymentshub.com/products/card-not-present/browser-post). The code in this repository handles the front-end payment process and adds a shopping cart with a simple payment form to a website. The code that handles back-end part of the payment process is located in a [separate repository](https://github.com/PaymentsHubDevelopers/PaymentsHub-Node-Browser-Post-API), allowing each to be deployed separately.

## Get Sandbox Credentials

To get started, create a free [Payments Hub Developer Portal account](https://developer.paymentshub.com/auth/signup). This will allow you to get the sandbox credentials that are required to test the app. Log in to your account to view the official [Browser Post API Integration Guide](https://developer.paymentshub.com/products/card-not-present/browser-post/integration), then [contact](https://developer.paymentshub.com/contact) the Payments Hub Sales Engineering team to get sandbox credentials added to your Developer Portal account.

## Follow Along with the Tutorial

When you're ready to start building your app, you can follow along with [this tutorial](https://developer.paymentshub.com/blog/embedded-payments-react-app-shopping-cart) for step-by-step instructions.

## Completed App

Your completed ecommerce app will look similar to the following:

![](/src/assets/payments-hub-react-browser-post-api-with-cart.png)

Click the "View Details" button to open a product page:

![](/src/assets/payments-hub-react-browser-post-api-product-with-cart.png)

Click the "Shopping Cart" button to open the cart modal, which displays the items in your cart, the total order amount, and allows users to edit the contents of their cart:

![](/src/assets/payments-hub-react-browser-post-api-shopping-cart.png)

Click the "Checkout" button to open a new tab with a checkout form where customers can enter their payment information and submit an order:

![](/src/assets/payments-hub-react-browser-post-api-with-cart-checkout-form.png)
