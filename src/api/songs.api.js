import axios from 'axios';
import api from '../constants';

const getSongs = (id) => axios({
  url: `${api.songs.url}${id}${api.songs.extend}`,
  method: 'GET',
})
  .then((response) => response.data.data);

export default getSongs;
