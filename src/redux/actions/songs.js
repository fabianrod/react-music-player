import Types from '../types/songs';

const fetchSongsRequest = (id) => ({
  type: Types.FETCH_SONGS_REQUEST,
  id,
});

const fetchSongsSucceed = (payload) => ({
  type: Types.FETCH_SONGS_SUCCEED,
  payload,
});

const fetchSongsFailure = (error) => ({
  type: Types.FETCH_SONGS_FAILURE,
  error,
});

export {
  fetchSongsRequest,
  fetchSongsSucceed,
  fetchSongsFailure,
};
