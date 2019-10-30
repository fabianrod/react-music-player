import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchArtistsSucceed, fetchArtistsFailure } from '../actions/artists';
import { getAllArtists } from '../../api/artists.api';
import { Types } from '../actions/artists';

function* handleFetchArtists() {
  try {
    const artists = yield call(getAllArtists);
    yield put(fetchArtistsSucceed(artists));
  } catch(e) {
    yield put(fetchArtistsFailure(e));
  }
}

function* artistsSaga() {
  yield takeLatest(Types.FETCH_ARTISTS_REQUEST, handleFetchArtists);
}

export default artistsSaga;