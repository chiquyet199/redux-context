import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import appState from './reducers'

const store = createStore(appState, applyMiddleware(thunk))

export default store