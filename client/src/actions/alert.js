import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from "./types";

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuid.v4();
    // Create the dispatch
    dispatch({
        type: SET_ALERT,
        payload: {
            msg,
            alertType,
            id
        }
    });
    // After 5 seconds it removes the alert by calling the REMOVE ALERT Action type
    setTimeout(()=>{
        dispatch({
            type: REMOVE_ALERT,
            payload: id
        })
    } , timeout)
};