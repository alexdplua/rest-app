import R from 'ramda';

import {
    FETCH_DISHES_SUCCESS,
} from '../../actionTypes'

const initialState = [];


export default (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_DISHES_SUCCESS:
            return payload
        default:
            return state
    }
}
