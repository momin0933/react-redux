const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"
// state
const initialCounterState = {
    count : 0,
}
const initialUserState = {
    users: [{name: "Anisul Hoque"}]
}

//action object type payload
const incrementCounter =() =>{
    return {
        type: INCREMENT,
    }
}
const decrementCounter =() =>{
    return {
        type: DECREMENT,
    }
}
const adduser =() =>{
    return {
        type: ADD_USER,
        payload: {name:'momin'}
    }
}

// create reducer for counter
const counterReducer = (state=initialCounterState,action) =>
{
    switch(action.type){
        case INCREMENT: 
        return{
            ...state,
            count: state.count + 1
        }
       
        case DECREMENT: return{
            ...state,
            count: state.count - 1
        }
        default: state;
    }
}

// 1. state
// 2. dispatch action
// 3. reducer
// 4. store update