import { combineReducers } from 'redux';
import artists from './artists';
import albums from './albums';
import songs from './songs';

export default combineReducers({
  artists,
  albums,
  songs,
});
