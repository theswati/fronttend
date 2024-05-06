//context-to declare global variable
//useReducer

import { createContext,useReducer } from "react";

export const Store=createContext()

//usereducer
const initialState={
    cart:{
        cartItems:[]
    }
};

function reducer(state,action){
    switch(action.type){
        case 'CART_ADD_ITEM':
            //add to cart

            // let obj={
            //     name: "shirt",
            //     q : 1
            // }
            // let newItem = {
            //     name: "shirt",
            //     q:2
            // }
            const newItem=action.payload;
            const existItem=state.cart.cartItems.find(
                (item)=>item._id===newItem._id
            );
            const cartItems=existItem
            ?
            // [a,b,c,d,e] => [a,b, newItem, d,e]
        //    let arr =  
           state.cart.cartItems.map((item)=>
            item._id===existItem._id?newItem:item
        )
        :[...state.cart.cartItems,newItem];
            
        return{
                ...state,
                cart:{...state.cart, cartItems},
            };
            default:
                return state;
    }
}


export function StoreProvider(props){
    const [state,dispatch]=useReducer(reducer,initialState);
    const value={state,dispatch}
     return <Store.Provider value={value}>
        {props.children}
     </Store.Provider>
}



