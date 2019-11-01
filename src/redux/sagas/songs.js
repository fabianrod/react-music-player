import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchSongsSucceed, fetchSongsFailure } from '../actions/songs';
import Types from '../types/songs';
import getSongs from '../../api/songs.api';

function* handleFetchSongs(action) {
  try {
    const songs = yield call(getSongs, action.id);
    yield put(fetchSongsSucceed(songs));
  } catch (e) {
    yield put(fetchSongsFailure(e));
  }
}

function* songsSaga() {
  yield takeEvery(Types.FETCH_SONGS_REQUEST, handleFetchSongs);
}

export default songsSaga;
