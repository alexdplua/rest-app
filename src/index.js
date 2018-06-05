import './scss/main.scss';
import './components/old';


import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import reducers from './components/reducers'


import Layout from './components/layout';
import Articles from './components/articles';
import Article from './components/article';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path={'/'} component={Articles}/>
                <Route path={'/categories/:id'} component={Articles}/>
                <Route path={'/article/:id'} component={Article}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);


