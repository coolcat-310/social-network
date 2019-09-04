import { GET_VISITORS, DELETE_VISITOR, ADD_VISITOR, GET_VISITOR, REMOVE_VISITOR, UPDATE_VISITOR } from "../actions/types";
import _ from 'lodash';

const initialState ={
    visitor: {},
    visitors: [],
    loading: true,
    error: {}
};



export default (state = initialState, action) => {

    const { type, payload } = action;

    switch (type){
        case GET_VISITORS:
            return{
                ...state,
                visitors: _.sortBy(payload, o=> o.start_date),
                loading: false
            };
        case GET_VISITOR:
            return{
                ...state,
                visitor: payload,
                loading: false
            };

        case DELETE_VISITOR:
            return{
                ...state,
                visitors: state.visitors.filter(visitor => visitor._id !== payload ),
                loading: false
            };
        case REMOVE_VISITOR:
            return{
                ...state,
                visitor: {},
                loading: false
            };
        case ADD_VISITOR:
            return{
                ...state,
                visitors: _.sortBy([payload, ...state.visitors], o => o.start_date),
                loading: false
            };
        case UPDATE_VISITOR:
            return{
                ...state,
                visitors: _.chain(state.visitors).filter(vit => vit._id !== payload._id).push(payload).sortBy(o => o.start_date),
                loading: false
            };
        default:
            return state;
    }
};