import axios from 'axios';
import { setAlert } from "./alert";

import { GET_TRAININGS, DELETE_TRAINING, UPDATE_TRAINING, ADD_TRAINING } from "./types";

export const addTraining = (formData, history) => async dispatch =>{
    try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const res = await axios.post('/api/trainings', formData, config);

        dispatch({
            type: ADD_TRAINING,
            payload: res.data
        });

        dispatch(setAlert('Training Added', 'success'));

        history.push('/dashboard');
    }catch(e){
        console.log(e);
    }
};

export const getTrainings = () =>async dispatch=>{
  try{
      const res = await axios.get('/api/trainings');

      dispatch({
          type: GET_TRAININGS,
          payload: res.data
      })

  }  catch (e) {
    console.log(e);
  }
};

export const deleteTraining = id => async dispatch =>{
    try{
        await axios.delete(`/api/trainings/${id}`);

        dispatch({
            type: DELETE_TRAINING,
            payload: id
        });

        dispatch(setAlert('Training Deleted', 'success'));
    }catch (e) {
        console.log(e);
    }
};

export const updateTraining = (formData, id, history) => async dispatch =>{
  try{
      const config = {
          headers:{
              'Content-Type': 'application/json'
          }
      };
      const res = await axios.patch(`/api/trainings/${id}`, formData, config);

      dispatch({
          type: UPDATE_TRAINING,
          payload: res.data
      });

      dispatch(setAlert('Updated Training', 'success'));
      history.push('/dashboard');
  }catch (e) {
      console.log(e);
  }

};