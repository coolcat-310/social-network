import { GET_TRAININGS, DELETE_TRAINING, UPDATE_TRAINING, ADD_TRAINING } from "../actions/types";
import _ from 'lodash';

const initialState = {
    training: {},
    trainings: [],
    loading: true,
    error: {}
};

export default (state = initialState, action) =>{
    const {type, payload} = action;

    switch (type) {
        case GET_TRAININGS:
            return{
                ...state,
                trainings: _.sortBy(payload, o => o.date),
                loading: false
            };
        case DELETE_TRAINING:
            return{
                ...state,
                trainings: state.trainings.filter(training => training._id !== payload),
                loading: false
            };
        case UPDATE_TRAINING:
            return{
                ...state,
                trainings: _.chain(state.trainings)
                                .filter(training => training._id !== payload._id)
                                .push(payload)
                                .sortBy(o => o.date),
                loading: false
            };
        case ADD_TRAINING:
            return {
                ...state,
                trainings: _.sortBy([payload, ...state.trainings], o=>o.date),
                loading: false
            };
        default:
            return state
    }
}