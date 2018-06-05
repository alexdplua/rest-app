import {
    FETCH_DISHES_START,
    FETCH_DISHES_SUCCESS,
    FETCH_DISHES_FAILURE,

    FETCH_DISHBYID_START,
    FETCH_DISHBYID_SUCCESS,
    FETCH_DISHBYID_FAILURE,

    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE

} from '../actionTypes'

import {
    fetchDishes as fetchDishesApi,
    fetchDishById as fetchDishByIdApi,
    fetchCategories as fetchCategoriesApi
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

export const fetchCategories = () => async dispatch => {
    dispatch({type: FETCH_CATEGORIES_START})
    try {
        const categories = await fetchCategoriesApi()
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: categories
        })
    } catch (err) {
        dispatch({
            type: FETCH_CATEGORIES_FAILURE,
            payload: err,
            error: true
        })
    }
}
