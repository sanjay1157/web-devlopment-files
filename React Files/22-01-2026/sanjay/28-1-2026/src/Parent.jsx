import React from 'react'

import Child from './Child'

import Subchild from './Subchild'

const Parent = () => {
    const person = {

        name: "sanjay",
        age : 22,
        city : "RJY"
    }

    const one = {

        name: "jeevan",
        age:"23",
        city:"vjy"
    }
  return (
    <div class = "container">
        <Child user = {person}/>
        <Subchild two = {one}/>
    </div>
  )
}

export default Parent