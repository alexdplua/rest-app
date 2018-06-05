import {
    FETCH_CATEGORIES_SUCCESS,
} from '../../actionTypes'

const initialState = [];


export default (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_CATEGORIES_SUCCESS:
            return payload
        default:
            return state
    }
}
