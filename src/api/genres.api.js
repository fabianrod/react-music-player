import axios from 'axios';
import api from '../constants';

const getGenres = () => axios({
  url: api.genres,
  method: 'GET',
})
  .then((response) => response.data.data);

export default getGenres;
