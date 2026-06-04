import { useContext } from 'react'
import { CityContext } from './Parent'

const C = () => {
  const { city, setcity } = useContext(CityContext)

  return (
    <div>
      <h2>welcome to {city}</h2>
      <button onClick={() => setcity("Chennai")}>
        Change to Chennai
      </button>
    </div>
  )
}

export default C
