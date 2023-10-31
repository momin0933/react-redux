import React from 'react'
import Counter from '../components/counter/Counter'

function CounterPage() {
  return (
    <div className='container mt-5'>
        <div className='row d-flex justify-content-center'>
            <Counter />
        </div>
    </div>
  )
}

export default CounterPage