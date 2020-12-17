import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  LOADING_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
} from "../types";
interface Like {
  userHandle: string;
  screamId: string;
}
interface UserCredential {
  handle?: string;
  userId?: string;
  imageUrl?: string;
  createdAt?: any;
  location?: string;
  email?: string;
  website?: string;
  bio?: string;
}
interface State {
  authenticated: boolean;
  credentials: UserCredential;
  likes: Like[];
  notifications: any[];
  loading: boolean;
}

const initialState: State = {
  authenticated: false,
  credentials: {},
  likes: [],
  notifications: [],
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: any) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case LIKE_SCREAM:
      return {
        ...state,
        likes: [
          {
            userHandle: state.credentials.handle,
            screamId: action.payload.screamId,
          },
        ],
      };
    case UNLIKE_SCREAM:
      return {
        ...state,
        likes: state.likes.filter(
          (like) => like.screamId === action.payload.screamId
        ),
      };
    default:
      return state;
  }
}
