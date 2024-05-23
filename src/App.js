import data from "./data";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge"
import Nav from "react-bootstrap/Nav"
import NavDropdown  from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import {LinkContainer} from "react-router-bootstrap"
import { useContext } from "react";
import {Store} from "./Store"
import { Link } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignupScreen from "./screens/SignupScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

function App() {

  // const {state}=useContext(Store);
  // const {cart}=state;
  //   console.log(cart)
    const{state,dispatch:ctxDispatch}=useContext(Store);
    const{cart,userInfo}=state;

    const signoutHandler=()=>{
      ctxDispatch({type:'USER_SIGNOUT'});
      localStorage.removeItem('userInfo');
      localStorage.removeItem('shippingAddress');
      localStorage.removeItem('paymentMethod')
    };

  return (
  <BrowserRouter>
    <div className="d-flex flex-column site-container">
    <ToastContainer position="bottom-center" limit={1}/>
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
                {userInfo?(
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">

                    <LinkContainer to ="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to ="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider/>
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                      >Sign Out
                      </Link>
                  </NavDropdown>
                ):(
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
           </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen/>}/>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/signin" element={<SigninScreen/>}/>
          <Route path="/signup" element={<SignupScreen/>}/>
          <Route path="/placeorder" element={<PlaceOrderScreen/>}/>
          <Route path="/cart" element={<CartScreen/>}/>
          <Route path="/shipping" element={<ShippingAddressScreen/>}></Route>
          <Route path="/payment" element={<PaymentMethodScreen/>}>       
          </Route>
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

//Task-12
// Complete Cart Screen
// 1. click handler for inc/dec item
// 2. click handler for remove item
// 3. click handler for checkout

//Task-13
// Create Signin Screen
//     1. create sign in form
//     2. add email and password
//     3. add signin button

//Task-14
// Connect To MongoDB Database
//     1. create atlas monogodb database
//     2. install local mongodb database
//     3. npm install mongoose
//     4. connect to mongodb database


// //Task-15
// Seed Sample Products
//     1. create Product model
//     2. create seed route
//     3. use route in server.js
//     4. seed sample product

//Task-16
//Seed Sample Users
//  1. create user model
//  2. seed sample users

//Task-17
// Create Signin Backend API
// 1. create signin api
// 2. npm install jsonwebtoken
// 3. define generateToken

// //Task-18
// Complete Signin Screen
// 1. handle submit action
// 2. save token in store and local storage
//  3. show user name in header


//Task-19
// Create Shipping Screen
// 1. create form inputs
//  2. handle save shipping address
// 3. add checkout wizard bar

//Task-20
//Create signup screen
//1.create input forms
//2.handle submit
//3.create backend API

//Task-21
//Implement select payment method screen
//1.Create input forms
//2.handle submit

//Task-22
//create place order screen
//1.show cartitems ,payment and address
//2.handle place order screen
//3.create order and create api

//Task-23
//Implement Place order screen
//1.handle place order action
//2.create order create api