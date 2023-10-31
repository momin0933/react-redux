import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from '../state/counter/counter1Slice'


export default configureStore({

    reducer:{
        counter: counterReducer
    }

})