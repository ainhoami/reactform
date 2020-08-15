import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const GET_REQUESTS = "GET_REQUESTS";
const ADD_REQUEST = "ADD_REQUEST";

const initialState = {
  requests: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUESTS:
      return { ...state, requests: action.payload };
    case ADD_REQUEST:
      return { ...state, requests: action.payload };
    default:
      return state;
  }
};
//getting data from the table
function getTrainerRequests() {
  return (dispatch) => {
    axios.get("/trainerr").then((resp) => {
      dispatch({
        type: GET_REQUESTS,
        payload: resp.data,
      });
    });
  };
}

function addTrainerRequest(formData, dispatch) {
  //new trainer request
  return new Promise((resolve, reject) => {
    axios
      .post("/trainerr", formData)
      .then((resp) => {
        dispatch({
          type: ADD_REQUEST,
          payload: resp.data,
        });
        resolve();
      })
      .catch((e) => {
        reject();
      });
  });
}

export function useTrainerrequest() {
  const dispatch = useDispatch();
  const requests = useSelector((appState) => appState.trainerrState.requests);
  const addTrainer = (formData) => {
    addTrainerRequest(formData, dispatch);
  };

  useEffect(() => {
    dispatch(getTrainerRequests());
  }, [dispatch]);

  return { requests, addTrainer };
}
