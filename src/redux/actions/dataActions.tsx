import {
  SET_SCREAMS,
  LOADING_DATA,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
} from "../types";
import axios from "axios";

// get all screams
export const getScreams = () => (dispatch: any) => {
  dispatch({ type: LOADING_DATA });

  axios
    .get("/screams")
    .then((res) => {
      dispatch({
        type: SET_SCREAMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_SCREAMS,
        payload: [],
      });
    });
};

// Like a scream
export const likeScream = (screamId: string) => (dispatch: any) => {
  axios
    .get(`/scream/${screamId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_SCREAM,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
// Unlike a scream
export const unlikeScream = (screamId: string) => (dispatch: any) => {
    axios
      .get(`/scream/${screamId}/unlike`)
      .then((res) => {
        dispatch({
          type: UNLIKE_SCREAM,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };