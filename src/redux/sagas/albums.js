import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchAlbumsSucceed, fetchAlbumsFailure } from '../actions/albums';
import Types from '../types/albums';
import getAlbums from '../../api/albums.api';

function* handleFetchAlbums(action) {
  try {
    const albums = yield call(getAlbums, action.id);
    yield put(fetchAlbumsSucceed(albums));
  } catch (e) {
    yield put(fetchAlbumsFailure(e));
  }
}

function* albumsSaga() {
  yield takeEvery(Types.FETCH_ALBUMS_REQUEST, handleFetchAlbums);
}

export default albumsSaga;
