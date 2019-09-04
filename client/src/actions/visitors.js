import  axios from 'axios';
import { setAlert } from "./alert";

import { GET_VISITORS, DELETE_VISITOR, ADD_VISITOR, GET_VISITOR, REMOVE_VISITOR, UPDATE_VISITOR } from "./types";

export const getVisitors = () => async dispatch =>{
    try{
        dispatch({ type: REMOVE_VISITOR});
        const res = await axios.get('/api/visitors');

        dispatch({
            type: GET_VISITORS,
            payload: res.data
        })

    }catch (e) {
        console.log(e);
    }
};

export const getVisitor = id => async dispatch =>{
  try{
      const res = await axios.get(`/api/visitors/${id}`);

      dispatch({
          type: GET_VISITOR,
          payload: res.data
      });

  }  catch (e) {
        console.error(e);
  }
};

export const deleteVisitor = id => async dispatch => {
    try{
        await axios.delete(`/api/visitors/${id}`);

        dispatch({
            type: DELETE_VISITOR,
            payload: id
        });

        dispatch(setAlert('Visitor Deleted', 'success'));
    }catch (e) {
        console.log(e);
    }

};

export const addVisitor = (formData, history) => async dispatch =>{
    try{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post('/api/visitors', formData, config);

        dispatch({
            type: ADD_VISITOR,
            payload: res.data
        });

        dispatch(setAlert('Visitor Added', 'success'));

        history.push('/dashboard');
    }catch (e) {
        console.log(e);
    }
};

export const updateVisitor = (formData, id, history) => async dispatch =>{
    try{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.patch(`/api/visitors/${id}`, formData, config);

       dispatch({
           type: UPDATE_VISITOR,
           payload: res.data
       });

       dispatch(setAlert('Updated Visitor', 'success'));
       history.push('/dashboard');
    }catch (e) {
        console.log(e);
    }
};