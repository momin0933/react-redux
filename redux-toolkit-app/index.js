// async calling - api calling
// api url - https://gasapi.ntsoftbd.com/api/MasterData/GetAll?status=1
// api url -- https://jsonplaceholder.typicode.com/todos
// middleware -redux thunk
// axios api

const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

//Constant
const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAILED = "GET_TODO_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";
// state
const initialTodosState={
    todos:[],
    isloading:false,
    error:null
}

//actions
const getTodoRequest = () => {
    return{
        type:GET_TODO_REQUEST,
    }
}
const getTodoFailed = (error) => {
    return{
        type:GET_TODO_FAILED,
        payload: error
    }
}
const getTodoSuccess = (todos) => {
    return{
        type:GET_TODO_SUCCESS,
        payload: todos
    }
}

// reducer
const todoReducer = (state=initialTodosState,action) =>
{
    switch(action.type)
    {
        case GET_TODO_REQUEST:
            return{
                ...state,
                isloading:true
            }
        case GET_TODO_SUCCESS:
            return{
                ...state,
                isloading:false,
                payload:action.payload
            }
        case GET_TODO_FAILED:
            return{
                ...state,
                isloading:false,
                error:action.payload
            }
        default:
            return state;
    }
};
// async action creator
const fetchData=() => {
    return(dispatch)=>{
        dispatch(getTodoRequest());
        axios.get(API_URL)
        .then(res=> {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error.message);
        })
    }
}
// store
const store = createStore(todoReducer, applyMiddleware);
store.subscribe(()=>{
    console.log("store",store.getState());
})

// store.dispatch()