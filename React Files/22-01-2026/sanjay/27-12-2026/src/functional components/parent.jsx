import React from 'react'

const parent = () => {
    const person={
name:"Sanjay",
age: 22,
city:"RJY"
    }
  return (
    <div calss="container">
        <child user={person}/>
    </div>
  )
}


export default parent