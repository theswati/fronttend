//useparams

import { useParams } from "react-router-dom";

function ProductScreen(){
    const params=useParams();//{slug:"ghjjjhhjj"}
    console.log(params)

    let slug=params.slug
    return(
        <div>
            <h1>{slug}</h1>
        </div>
    )

}
export default ProductScreen;

//useParams will help you to access the url value
//eg:localhoast:3000/product/.....
//(this ..... will be accessed with the help of use params)