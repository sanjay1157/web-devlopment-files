import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function A  () { 
    const count = useSelector ((state)=>state.count) 
     const dispatch=useDispatch()
  return (
    <div>
        <h1>Count{count}</h1>
        <button onClick={()=> dispatch({type:"increment"})}>Increase</button>
        <button onClick={()=> dispatch({type:"decrement"})}>Decrease</button>


    </div>

    
  )
}

export default A