import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import dishes from './dishes';
import dishById from './dishById';
import categories from './categories';


export default combineReducers({
    routing: routerReducer,
    dishes,
    dishById,
    categories
});
