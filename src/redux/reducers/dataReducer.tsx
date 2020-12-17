import {
  SET_SCREAMS,
  LOADING_DATA,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
} from "../types";
interface State {
  screams: any[];
  scream: any;
  loading: boolean;
}
const initialState: State = {
  screams: [],
  scream: {},
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: any) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false,
      };
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      let index = state.screams.findIndex(
        (scream: any) => scream.screamId === action.payload.screamId
      );
      state.screams[index] = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
}
