import data from "./data";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container";
import {LinkContainer} from "react-router-bootstrap"
import { useContext } from "react";
import {Store} from "./Store"
import { Link } from "react-router-dom";
import CartScreen from "./screens/CartScreen";

function App() {

  const {state}=useContext(Store);
  const {cart}=state;
    console.log(cart)
  return (
  <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>amazona</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <Link to="/cart" className="nav-link">
                Cart
                {cart.cartItems && cart.cartItems.length>0 && (
                  <Badge pill bg="danger">
                   {/* [1, 2, 1,3] */}
                    {cart.cartItems.reduce((a,c)=>a+c.quantity,0)}
                  </Badge>
                )}
                </Link>
           </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
        <Routes>
          < Route path="/product/:slug" element={<ProductScreen/>}/>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/cart" element={<CartScreen/>}/>

        </Routes>
        </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
        </div>
    </BrowserRouter>

  );
}



export default App;


//Task-1
//list products

//1)create product array
//2)add product images
//3)render products
//4)style products

//Task-2
// Routing

// . Add page routing
//    1. npm i react-router-dom
//    2. create route for home screen
//    3. create router for product screen


//Task-3
// Fetching data in backend

// Use axios to fetch data in backend.


// Fetch Products From Backend
//    1. set proxy in package.json
//    2. npm install axios
//    3. use state hook
//    4. use effect hook

//Task-4
// Manage State By Reducer Hook
// 1. define reducer
// 2. update fetch data
// 3. get state from usReducer


//Task-5
// Bootstrap

//Bootstrap provides a collection of syntax for template design
//it is free,open source front end development framework for the creation of websites and web apps.

// Add bootstrap UI Framework
//     1. npm install react-bootstrap bootstrap
//     2. update App.js


//Task-6
// Create Product and Rating Component
// 1. create Rating component
// 2. Create Product component
// 3. Use Rating component in Product component

//Task-7
// Create Product Details Screen
//     1. fetch product from backend
//     2. create 3 columns for image, info and action

//listgroup,row,col.helmet,badge-bootstrap

//Tak-8
// Create Loading and Message Component
//     1. create loading component
//     2. use spinner component
//     3. create message component
//     4. createutils.js  to define getError fuction

//Task-9-cart screen
// Create React Context For Add Item To Cart
//     1. Create React Context
//     2. define reducer
//     3. create store provider
//     4. implement add to cart button click handler

//Task-10
// Complete Add To Cart
// 1. check exist item in the cart
//  2. check count in stock in backend

//Tasak-11
// Create Cart Screen
// 1. create 2 columns
//  2.display items list
// .3. create action column