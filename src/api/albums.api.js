import axios from 'axios';
import api from '../constants';

const getAlbums = (id) => axios({
  url: `${api.albums.url}${id}${api.albums.extend}`,
  method: 'GET',
})
  .then((response) => response.data.data);

export default getAlbums;
