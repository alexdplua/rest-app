import {
    FETCH_DISHES_START,
    FETCH_DISHES_SUCCESS,
    FETCH_DISHES_FAILURE,

    FETCH_DISHBYID_START,
    FETCH_DISHBYID_SUCCESS,
    FETCH_DISHBYID_FAILURE

} from '../actionTypes'

import {
    fetchDishes as fetchDishesApi,
    fetchDishById as fetchDishByIdApi
} from '../api'


export const fetchDishes = () => async dispatch => {
    dispatch({type: FETCH_DISHES_START})
    try {
        const dishes = await fetchDishesApi()
        console.log('dishes', dishes);
        dispatch({
            type: FETCH_DISHES_SUCCESS,
            payload: dishes
        })
    } catch (err) {
        dispatch({
            type: FETCH_DISHES_FAILURE,
            payload: err,
            error: true
        })
    }
}


export const fetchDishById = id => async dispatch => {
    dispatch({type: FETCH_DISHBYID_START})
    try {
        const dish = await fetchDishByIdApi(id)

        dispatch({
            type: FETCH_DISHBYID_SUCCESS,
            payload: dish,
        })
    } catch (err) {
        dispatch({
            type: FETCH_DISHBYID_FAILURE,
            payload: err,
            error: true
        })
    }
}
