import React from 'react'

const child = (user) => {

    const{name, age, city}=user
  return (
    <section>
    <div>name:{name}</div>
    <div>age:{age}</div>
    <div>city:{city}</div>
    </section>
  )
}

export default child