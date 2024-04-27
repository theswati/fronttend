import { useEffect,useState,useReducer } from "react";
import axios from "axios";
import data from "../data";
import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product"

const reducer=(state,action)=>{
    console.log("state",state)
    console.log("action",action)
     switch(action.type){
    case "FETCH_REQUEST":
       return{...state,loading:true}

    case "FETCH_SUCCESS":
         return{...state,products:action.payload,loading:false}

    case "FETCH_FAIL":
        return{...state,loading:false,error:action.payload}

        default:
          return state;
     }
};

// three actions are there
// 1st one is => FETCH_REQUEST
// themn success or fail

function HomeScreen(){
    // const[products,setProducts]=useState([]);
     const[{loading,error,products},dispatch]=useReducer(reducer,{
      products:[],
      loading:true,
      error:"",
     })

     console.log("final ans",{loading,error,products})
    useEffect(()=>{
        const fetchData=async()=>{
            // now we need to call all actions usind dispatch 

            dispatch({type:"FETCH_REQUEST"}) // means api is starting
            // now lets call api:
            try{
               const result=await axios.get("/api/products")
               dispatch({type:"FETCH_SUCCESS",payload:result.data})
            }
            catch(err){
                dispatch({type:"FETCH_FAIL",payload:err.message})
            }

        };
            fetchData();
        },[]);
    return(
        <div>
        <h1>Featured Products</h1>

        {/* to check if api is loading or some error */}
          
        <div className="products">
          {
            loading?(<div>Loading...</div>):error?(<div>{error}</div>
            ):(
             <Row>
             {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3" >
              <Product product={product}></Product>
              </Col>
             ))}
             </Row>
            )}
            </div>
            </div>
    )
}

export default HomeScreen;






//fetch start or fetch request//...loading
//fetch success
//fetch fail