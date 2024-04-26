import data from "./data";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen"

function App() {
  return (
  <BrowserRouter>
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <Routes>
          < Route path="/product/:slug" element={<ProductScreen/>}/>
          <Route path="/" element={<HomeScreen/>}/>
        </Routes>
        </main>
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
