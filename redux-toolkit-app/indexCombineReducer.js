const { createStore, combineReducers } = require("redux");

// product reducer
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

// cart reducer
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

const initialproductstate={
    products:["sugar","salt"],
    numberproducts:2,
}
// card initialize
const initialcartstate={
    cart:["sugar"],
    numberofCart:1,
}

const getproduct = () =>{
    return{
        type:GET_PRODUCTS,
    };
}
const addproduct = (product) =>{
    return{
        type:ADD_PRODUCTS,
        payload: product
    };
};

// cart initilize
const getcart = () =>{
    return{
        type:GET_CART_ITEMS,
    };
}
const addcart = (product) =>{
    return{
        type:ADD_CART_ITEMS,
        payload: product
    };
};



const productReducer = (state=initialproductstate,action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
            }
        case ADD_PRODUCTS:
            return{
                products:[...state.products,action.payload],
                numberproducts: state.numberproducts+1,
            }
        default:
            return state;
    }
}

// cart reducer
const cartReducer = (state=initialcartstate,action) => {
    switch(action.type){
        case GET_CART_ITEMS:
            return {
                ...state,
            }
        case ADD_CART_ITEMS:
            return{
                cart:[...state.cart,action.payload],
                numberofCart: state.numberofCart+1,
            }
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    productR:productReducer,
    cartR:cartReducer
});

const store = createStore(rootReducer);
// store.subscribe(()=>{
//    // console.log(state.getState())
// })
store.subscribe(()=>{
    console.log("store",store.getState());
})
//store.dispatch(getproduct());
store.dispatch(addproduct("PEN"));
//store.dispatch(getcart());
store.dispatch(addcart("pen"));

