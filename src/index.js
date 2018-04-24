import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './reducers/rootReducer'
import App from './containers/App'
import './styles/index.css'

const middleware = [ ]

if(process.env.NODE_ENV !== 'production') { middleware.push(createLogger()) }

const store = createStore(rootReducer, applyMiddleware(...middleware))

const rootDOMNode = document.getElementById('root')

render(<Provider store={store}><App /></Provider>, rootDOMNode)

registerServiceWorker()
