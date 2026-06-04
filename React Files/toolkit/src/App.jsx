import { useState } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import A from './A'

function App() {

  return (
    <Provider store={store}>
      <A/>
      {/* <AB/> */}

    </Provider>
  )
}

export default App