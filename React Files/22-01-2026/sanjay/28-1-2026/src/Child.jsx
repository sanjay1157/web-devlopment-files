import React from 'react'
import Subchild from './Subchild'

const Child = ({ user, }) => {

  const value = {
    fruit: "Mango"
  }

  return (
    <section>
      <Subchild two={user} four={value} />
    </section>
  )
}

export default Child
