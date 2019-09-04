import axios from 'axios';
import { setAlert } from "./alert";

import { GET_SD029, ADD_SD029, GET_SD029_COUNT } from "./types";

export const getSd029 = (skip = 0) => async dispatch => {
    try{
        let query = '/api/sd029';
        if(skip> 0){
            query = `${query}?skip=${skip}`;
        }
        const res = await axios.get(query);

        dispatch({
            type: GET_SD029,
            payload: res.data
        })
    }catch (e) {
        console.log(e);
    }
};

export const getSd029Count = () => async dispatch =>{
    try{
        const res = await axios.get('/api/sd029/count');

        dispatch({
            type: GET_SD029_COUNT,
            payload: res.data["count"]
        })
    }catch(e){
        console.log(e);
    }
};

export const addSd029 = (formData, history) => async dispatch =>{
    try{
        const config ={
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post('/api/sd029', formData, config);

        dispatch({
            type: ADD_SD029,
            payload: res.data
        });

        dispatch(setAlert('SD029 Added', 'success'));

        history.push('/dashboard');
    }catch(e){
        console.log(e);
    }
};