import { useState, createContext } from 'react'
import A from './A'
import B from './B'

export const CityContext = createContext()

const Parent = () => {
  const [city, setcity] = useState("vijayawada")

  return (
    <CityContext.Provider value={{ city, setcity }}>
      <A />
      <B />
    </CityContext.Provider>
  )
}

export default Parent
