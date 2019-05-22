import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../src/reducer/index'
import App from '../src/App'
import promiseMiddleware from 'redux-promise-middleware';

const initialState = {

    isFetching: false,
    didInvalidate: false,
    movies: []
};

const store = createStore(
    reducer, initialState,
    applyMiddleware(promiseMiddleware)
)

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
)