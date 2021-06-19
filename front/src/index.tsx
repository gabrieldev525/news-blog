// react
import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter,
  Route
} from 'react-router-dom'

// third party
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import { ToastContainer, Slide } from 'react-toastify'

// local
import store from "./store"
import './index.css'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer
        position='top-right'
        autoClose={ 5000 }
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={ false }
        draggable={ false }
        pauseOnHover
        transition={ Slide } />

    <React.StrictMode>
      <HashRouter>
        <Route path="/" component={ App } />
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)