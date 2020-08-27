import { SET_APP_LOADING, GET_INITIAL_DATA } from "../actionTypes";

const initialState = {
  series: [],
  tracks: [],
  assets: [],
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_INITIAL_DATA:
      return {
        ...state,
        series: action.payload.series,
        tracks: action.payload.tracks,
        assets: action.payload.assets,
        loading: false,
      };
    default:
      return state;
  }
};
