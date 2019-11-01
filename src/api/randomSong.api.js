import axios from 'axios';
import api from '../constants';

const getRandomSong = (nameGenre) => axios({
  url: `${api.randomSong.url}${nameGenre}${api.randomSong.extend}`,
  method: 'GET',
})
  .then((response) => response.data.data);

export default getRandomSong;
