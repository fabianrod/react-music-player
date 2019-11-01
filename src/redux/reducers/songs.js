import Types from '../types/songs';

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_SONGS_REQUEST:
      return {
        ...state,
        id: action.id,
      };
    case Types.FETCH_SONGS_SUCCEED:
      return {
        ...state,
        data: action.payload,
      };
    case Types.FETCH_SONGS_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
