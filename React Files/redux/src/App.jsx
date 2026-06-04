import React from 'react'
import { Provider } from 'react-redux'
import A from './A'
import { store } from './index'


function App() {
  return (
    <Provider store={store}>
      <A/>
    </Provider>
  )
}

export default App