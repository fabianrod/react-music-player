import Types from '../types/albums';

const fetchAlbumsRequest = (id) => ({
  type: Types.FETCH_ALBUMS_REQUEST,
  id,
});

const fetchAlbumsSucceed = (payload) => ({
  type: Types.FETCH_ALBUMS_SUCCEED,
  payload,
});

const fetchAlbumsFailure = (error) => ({
  type: Types.FETCH_ALBUMS_FAILURE,
  error,
});

export {
  fetchAlbumsRequest,
  fetchAlbumsSucceed,
  fetchAlbumsFailure,
};
