import React from 'react'
import Router from './routes/index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router/>
      </div>
    </Provider>
  )
}

export default App