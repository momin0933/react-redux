import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/state/counterSlice';

function Counter() {
    const count = useSelector((state)=> state.counter.value);    
    const dispatch = useDispatch();
  return (
    <>
    <div className='card'>
        <div className='card-header bg-secondary '>
            <h3 className='text-white'>My Counter App</h3>
        </div>
    </div>
     <div className='card-body text-align:center'>
        <h1>{count}</h1>
        <div className='my-4'>
            <button className='btn btn-primary' onClick={()=> dispatch(increment())}>Increase</button>
            <button className='btn btn-danger mx-2' onClick={()=>dispatch(decrement())} >Decrease</button>
        </div>
    </div>

          <div class="card" style="width: 18rem;">
              <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

    </>
    
  )
}

export default Counter