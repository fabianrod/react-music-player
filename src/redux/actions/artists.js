import Types from '../types/artists';

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
