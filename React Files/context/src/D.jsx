import { useContext } from 'react'
import { CityContext } from './Parent'

const D = () => {
  const { city, setcity } = useContext(CityContext)

  return (
    <div>
      <h2>changed city {city}</h2>
      <button onClick={() => setcity("kerala")}>
        Change to kerala
      </button>
    </div>
  )
}

export default D
