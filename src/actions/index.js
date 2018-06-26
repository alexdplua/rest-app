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


/*export const fetchDishes = () => dispatch => {
    dispatch({type: FETCH_DISHES_START})
    try {
        const dishes = fetchDishesApi()
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
}*/

const handleErrors=(response)=> {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const fetchDishes = () => dispatch => {
    dispatch({type: FETCH_DISHES_START})
    return fetch("https://api.myjson.com/bins/vdsly")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            console.log('json', json);
            dispatch({
                type: FETCH_DISHES_SUCCESS,
                payload: json,
            })
            return json;
        })
        .catch(error => dispatch({
            type: FETCH_DISHES_FAILURE,
            payload: error,
        }));
}


export const fetchCategories = () => dispatch => {
    dispatch({type: FETCH_CATEGORIES_START})
    try {
        const categories = fetchCategoriesApi()
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
