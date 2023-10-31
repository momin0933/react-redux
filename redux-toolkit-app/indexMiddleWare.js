const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// product reducer
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";



const initialproductstate={
    products:["sugar","salt"],
    numberproducts:2,
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



const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(()=>{
    console.log("store",store.getState());
})

store.dispatch(getproduct());
store.dispatch(addproduct("PEN"));

