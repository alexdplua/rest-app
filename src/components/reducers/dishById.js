//deprecated
import {
    FETCH_DISHBYID_SUCCESS
} from '../../actionTypes'

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_DISHBYID_SUCCESS:
            return payload
        default:
            return state
    }
}



