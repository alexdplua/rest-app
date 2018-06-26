import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import dishes from './dishes';
import categories from './categories';


export default combineReducers({
    routing: routerReducer,
    dishes,
    categories
});
