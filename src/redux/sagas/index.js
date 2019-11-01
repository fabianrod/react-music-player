import { all } from 'redux-saga/effects';
import ArtistsSaga from './artists';
import AlbumsSaga from './albums';
import SongsSaga from './songs';

export default function* rootSagas() {
  yield all([
    ArtistsSaga(),
    AlbumsSaga(),
    SongsSaga(),
  ]);
}
