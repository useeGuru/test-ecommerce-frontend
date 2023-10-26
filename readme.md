---
title: Vite + React + Tailwind CSS + Node.js
description: This test project is a simple site that implements some of the functions of an e-commerce site.
tags:
  - node
  - vite
  - react
  - tailwind css
---

# Vite + React + Tailwind CSS + Node.js

This is a [Vite + React](https://vitejs.dev/guide/#trying-vite-online).

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/NeiLty?referralCode=ySCnWl)

## ✨ Features


## 💁‍♀️ How to use

- Install required dependencies with `npm install`
- Start the server for local development `npm run dev`
                                         `npm run build`

### 💻 Server

1. **_Navigate to the server directory_**

```sh
$ cd server
```

2. **_Install dependencies_**

```sh
$ npm install
```

#### Running

1. **_Compile and hot-reload for development_**

```sh
$ npm run start
```

2. **_Compile for production_**

```sh
$ npm run build
```

## 💻 Built With

- **ReactJS**
- **Redux**
- **NodeJS**
- **ExpressJS**
- **MongoDB**
- **TailwindCSS**

## 📂 File Structure

```sh
|-- README.md
|-- client
|   |-- index.html
|   |-- package-lock.json
|   |-- package.json
|   |-- postcss.config.cjs
|   |-- public
|   |-- src
|   |   |-- App.jsx
|   |   |-- components
|   |   |   |-- Carousel.jsx
|   |   |   |-- CartProduct.jsx
|   |   |   |-- Categorie.jsx
|   |   |   |-- Categories.jsx
|   |   |   |-- Product.jsx
|   |   |   |-- Products.jsx
|   |   |   `-- Title.jsx
|   |   |-- index.css
|   |   |-- layout
|   |   |   |-- Footer.jsx
|   |   |   `-- Navbar.jsx
|   |   |-- main.jsx
|   |   |-- pages
|   |   |   |-- Home.jsx
|   |   |   |-- Login.jsx
|   |   |   |-- ShoppingCart.jsx
|   |   |   |-- ShoppingCategorie.jsx
|   |   |   |-- Signup.jsx
|   |   |   `-- SingleProduct.jsx
|   |   |-- request-methods.js
|   |   `-- store
|   |       |-- auth-actions.js
|   |       |-- auth-slice.js
|   |       |-- cart-slice.js
|   |       `-- index.js
|   |-- tailwind.config.cjs
|   `-- vite.config.js
`-- server
    |-- controllers
    |   |-- auth.js
    |   |-- product.js
    |   `-- user.js
    |-- index.js
    |-- middlewares
    |   `-- verifyToken.js
    |-- models
    |   |-- Product.js
    |   `-- User.js
    |-- package-lock.json
    |-- package.json
    `-- routes
        |-- auth.js
        |-- product.js
        `-- user.js
```
##  Features and Requirements

1. Authentication Page
    Login - Username/Email and password
    Registration - Username, Email, Password, Confirm Password
    Password Recovery - Email
2. Product Listing:
    Fetch products from a provided API or create a mock API using tools like JSON Server.
    Implement infinite scrolling or pagination to load more products as the user scrolls down.
3. Product Details:
    On clicking a product, the user should be taken to a detailed product page with additional information.
4. Shopping Cart:
    Users should be able to add products to the shopping cart.
    Implement a cart icon with a counter indicating the number of items in the cart.
5. Responsive Design:
    The application should be fully responsive and optimized for various screen sizes.
6. State Management:
    Implement state management (you may use Redux, Context API, etc.)

