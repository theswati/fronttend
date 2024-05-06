import axios from "axios";
import { useContext,useEffect,useReducer } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card"
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Rating from "../Components/Rating";
import {Helmet} from "react-helmet-async";
import LoadingBox from "../Components/LoadingBox";
import MessageBox from "../Components/MessageBox";
import  getError  from "../utils";
import {Store} from "../Store";



const reducer=(state,action)=>{
    // console.log("state",state)
    // console.log("action",action)
     switch(action.type){
    case "FETCH_REQUEST":
       return{...state,loading:true}

    case "FETCH_SUCCESS":
         return{...state,product:action.payload,loading:false}

    case "FETCH_FAIL":
        return{...state,loading:false,error:action.payload}

        default:
          return state;
     }
};
function ProductScreen(){
    const params=useParams();//{slug:"ghjjjhhjj"}
    // console.log("params",params)
    let slug= params.slug

    const[{loading,error,product},dispatch]=useReducer(reducer,{
        product:[],
        loading:true,
        error:"",
       }) 
       useEffect(()=>{
        const fetchData=async()=>{
            // now we need to call all actions usind dispatch 

            dispatch({type:"FETCH_REQUEST"}) // means api is starting
            // now lets call api:
            try{
            const result=await axios.get(`/api/products/slug/${slug}`)
               dispatch({type:"FETCH_SUCCESS",payload:result.data})
            }
            catch(err){
                dispatch({type:"FETCH_FAIL",payload:getError(err)})
            }

        };
            fetchData();
        },[slug]); 

        const{state,dispatch:ctxDispatch}=
        useContext(Store);

        const {cart}=state;
        const addToCartHandler=async()=>{
             let existItem;
            if(cart.cartItems && cart.cartItems.length>0){
              existItem = cart.cartItems.find((x)=>x._id===product._id);
            }
            else {
              existItem = null
            }

             const quantity=existItem?existItem.quantity+1:1;
             const {data}=await
             axios.get(`/api/products/${product._id}`);
             if(data.countInStock < quantity){
                window.alert('sorry. Product is out of stock');
                return;
             }
            
            ctxDispatch({
                    type:'CART_ADD_ITEM',
                    payload:{...product,quantity}
                });

        }


    return loading?(
            <LoadingBox/>
         )
         :error?(
            <MessageBox variant ="danger">{error}</MessageBox>
         ):(
            <div>
                <Row>
                    <Col md={6}>
                        <img
                        className="img-large"
                        src={product.image}
                        alt={product.name}
                        ></img>
                        </Col>
                        <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Helmet>
                                <title>{product.name}</title>
                                </Helmet>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating 
                                    rating={product.rating}
                                    numReviews={product.numReviews}
                                />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price:${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description:<p>{product.description}</p>
                            </ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Price:</Col>
                                                <Col>${product.price}</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status:</Col>
                                                <Col>
                                                {product.countInStock>0?(
                                                    <Badge bg="success">In Stock</Badge>
                                                ):(
                                                    <Badge bg="danger">Unavailable</Badge>
                                                )}
                                               </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        {product.countInStock>0 &&(
                                            <ListGroup.Item>
                                                <div className="d-grid">
                                                    <Button onClick={addToCartHandler}variant="primary">
                                                        Add to Cart
                                                        </Button>

                                                </div>
                                            </ListGroup.Item>
                                        )}
                                        
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                         </Col>
                    </Row>
</div>
);
}
export default ProductScreen;






















//useParams will help you to access the url value
//eg:localhoast:3000/product/.....
//(this ..... will be accessed with the help of use params)
