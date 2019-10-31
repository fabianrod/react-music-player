export const Types = {
  FETCH_ARTISTS_REQUEST: 'FETCH_ARTISTS_REQUEST',
  FETCH_ARTISTS_SUCCEED: 'FETCH_ARTISTS_SUCCEED',
  FETCH_ARTISTS_FAILURE: 'FETCH_ARTISTS_FAILURE',
};

const fetchArtistsRequest = () => ({
  type: Types.FETCH_ARTISTS_REQUEST,
});

const fetchArtistsSucceed = (payload) => ({
  type: Types.FETCH_ARTISTS_SUCCEED,
  payload,
});

const fetchArtistsFailure = (error) => ({
  type: Types.FETCH_ARTISTS_FAILURE,
  error,
});

export {
  fetchArtistsRequest,
  fetchArtistsSucceed,
  fetchArtistsFailure,
};
