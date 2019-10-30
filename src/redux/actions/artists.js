export const Types = {
  FETCH_ARTISTS_REQUEST:'FETCH_ARTISTS_REQUEST',
  FETCH_ARTISTS_SUCCEED:'FETCH_ARTISTS_SUCCEED',
  FETCH_ARTISTS_FAILURE:'FETCH_ARTISTS_FAILURE',
};

const fetchArtistsRequest = () => {
  return {
    type: Types.FETCH_ARTISTS_REQUEST,
  }
}

const fetchArtistsSucceed = (payload) => {
  return {
    type: Types.FETCH_ARTISTS_SUCCEED,
    payload,
  }
}

const fetchArtistsFailure = (error) => {
  return {
    type: Types.FETCH_ARTISTS_FAILURE,
    error,
  }
}

export {
  fetchArtistsRequest,
  fetchArtistsSucceed,
  fetchArtistsFailure,
}