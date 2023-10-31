const {createStore} = require("redux");
const INCREMENT = "INCREMENT"
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"
// state
const initialCounterState = {
    count : 0,
    amount:0
}
const initialUserState = {
    users: ['momin'],
    count:1
}

//action object type payload
// const incrementCounter =() =>{
//     return {
//         type: INCREMENT,
//     }
// }
// const incrementCounterByValue =(value) =>{
//     return {
//         type: INCREMENT_BY_VALUE,
//         payload:value
//     };
// }
// const decrementCounter =() =>{
//     return {
//         type: DECREMENT,
//     }
// }
const adduser =(user) =>{
    return {
        type: ADD_USER,
        payload:user        
    }
}

// create reducer for counter
// const counterReducer = (state=initialCounterState,action) =>
// {
//     switch(action.type){
//         case INCREMENT: 
//         return{           
//             count: state.count + 1,
//             amount: state.amount +2
//         }
//         case INCREMENT_BY_VALUE: 
//         return{           
//             count: state.count + action.payload            
//         }
//         case DECREMENT: return{
//             ...state,
//             count: state.count - 1
//         }
//         case DECREMENT: return{
//             ...state,
//             count: state.count - 1
//         }
//         default: state;
//     }
// }
const UserReducer = (state = initialUserState,action) => {
    switch(action.type){
        case ADD_USER:
             return{   
            users:[...state.users, action.payload],        
            count: state.count + 1,            
        }
    }
    
}

// 1. state
// 2. dispatch action
// 3. reducer
// 4. store update -getState(), dispatch(), subscribe()

// create store
//const store = createStore(counterReducer);
const store = createStore(UserReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

// dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounterByValue(5));
store.dispatch(adduser('zayan'));