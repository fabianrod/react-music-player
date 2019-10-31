import Types from '../types/albums';

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_ALBUMS_REQUEST:
      return {
        ...state,
        id: action.id,
      };
    case Types.FETCH_ALBUMS_SUCCEED:
      return {
        ...state,
        data: action.payload,
      };
    case Types.FETCH_ALBUMS_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
