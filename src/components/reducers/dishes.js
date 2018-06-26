import R from 'ramda';

import {
    FETCH_DISHES_SUCCESS,
    FETCH_DISHES_START
} from '../../actionTypes'

const initialState = {
    fetch: false,
    data: null,
    error: null,
}

export default (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_DISHES_START:
            return {...state, fetch: true}
        case FETCH_DISHES_SUCCESS:
            console.log('payload', payload);
            return {...state, fetch: false, data: payload.myarray, error: null}
        default:
            return state
    }
}
