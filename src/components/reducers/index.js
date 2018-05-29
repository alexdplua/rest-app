import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import dishes from './dishes';
import dishById from './dishById';


export default combineReducers({
    routing: routerReducer,
    dishes,
    dishById
});
