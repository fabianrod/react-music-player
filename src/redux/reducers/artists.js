import { Types } from '../actions/artists';

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_ARTISTS_REQUEST:
      return {
        ...state,
      };
    case Types.FETCH_ARTISTS_SUCCEED:
      return {
        ...state,
        data: action.payload,
      };
    case Types.FETCH_ARTISTS_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
