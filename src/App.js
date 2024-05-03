import data from "./data";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {LinkContainer} from "react-router-bootstrap"


function App() {
  return (
  <BrowserRouter>
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>amazona</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
        <Routes>
          < Route path="/product/:slug" element={<ProductScreen/>}/>
          <Route path="/" element={<HomeScreen/>}/>
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