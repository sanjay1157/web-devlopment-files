import React, { useState } from 'react'

function One(two) {
    const[A,setB]=useState("Hyderabad")
    console.log(A)

    const [a , setb] = useState("100")
    console.log(useState())
    function increase(){

        b(a+1)
    }
  return (
    <div>
        {two.value}
        <button onClick={increase}>Increase{a}</button>

    </div>
  )
}

export default One