import Card from "react-bootstrap/card";
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"
import Rating from "./Rating";
import axios from "axios";
import {useContext} from "react";
import {Store} from "../Store";



function Product(props){
const {product} = props;

  const{state,dispatch:ctxDispatch}=useContext(Store);
  const{cart:{cartItems}}=state;

  const addToCartHandler=async(item)=>{
    let existItem
    if(cartItems){
      console.log("hhhh",cartItems)
       existItem= cartItems.find((x)=>x._id===product._id);
    }
    
    const quantity=existItem?existItem.quantity+1:1;

    console.log(existItem, quantity)
    const {data}=await
    axios.get(`/api/products/${item._id}`);
    if (data.countInStock<quantity){
      window.alert('Sorry.Product is out of stock');
      return;
    }
    ctxDispatch({
        type:'CART_ADD_ITEM',
        payload:{...item,quantity},
    });

  };
   return(
    <Card>
           <Link to={`/product/${product.slug}`}>
           <img src={product.image} className="card-img-top"  alt={product.name} />
        </Link> 
    <Card.Body>
        <Link to={`/product/${product.slug}`}>
        <Card.Title>{product.name}</Card.Title>
         </Link>

         <Rating rating={product.rating} numReviews={product.numReviews}
          />
         <Card.Text>${product.price}</Card.Text>

         <Button className="btn-primary" onClick={()=>addToCartHandler(product)}>Add to cart</Button>
    </Card.Body>
   </Card>
    );
}

export default Product;


