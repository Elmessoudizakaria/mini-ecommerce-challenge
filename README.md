# Ecommerce MVP

This application is a ecommerce MVP developped with React 18+ TypeScript.

## Project Structure

Mainly the project contains 3 folders:
- *Containers:* contains the smart components that can make http calls and manipulate data, they represent a page.
- *Components:* contains the display components that can be re-used across differents pages.
- *Shared:* contains all shared fonctionalities like models, contexts, tools, store (if we need a state management tool like `redux`)

## Features

This MVP provides 3 fonctionalities to the user

- Display a list of products so that the user can choose what to buy.
-  add products to shopping cart, navigate to the cart and manage the added products (remove or adjust quantity).
- Display product details on user click by a user friendly modal.
- the main app pages are responsive to differente user devices.
 
## Run the app

it's easy to run the app in your local machine.
- *1*: clone the project
- *2*: access to the project
- *3*: on cmd run `npm install && npm run dev`

you can access to the app directly with from 
[stackbliz](https://stackblitz.com/~/github.com/Elmessoudizakaria/mini-ecommerce-challenge)