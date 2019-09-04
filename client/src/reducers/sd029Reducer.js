import { GET_SD029, ADD_SD029, GET_SD029_COUNT } from "../actions/types";
import _ from 'lodash';

const initialState = {
    sd029: {},
    sd029s: [],
    loading: true,
    error: {},
    count: 0
};

export default (state = initialState, action) =>{
    const { type, payload } = action;

    switch (type){
        case GET_SD029:
            return {
                ...state,
                sd029s: _.sortBy(payload, o => o.invc_dt),
                loading: false
            };
        case ADD_SD029:
            return {
                ...state,
                sd029s: _.sortBy([payload, ...state.sd029s], o => o.invc_dt),
                loading: false
            };
        case GET_SD029_COUNT:
            return {
                ...state,
                count: payload,
                loading: false
            };
        default:
            return state;
    }
}