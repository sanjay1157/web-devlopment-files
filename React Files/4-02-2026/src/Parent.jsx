import React, { useState } from 'react'
import A from './A'
import B from './B'
import C from './C'

const Parent = () => {
    const [city , setcity] = useState ("vizag")
    let [village , setvillage] = useState ("peta")
  return (
    <div>
        <A value= {city}/>
        <B value = {village}/>
        <C value = {village}/>
    </div>
  )
}

export default Parent