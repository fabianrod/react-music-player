import axios from 'axios';
import api from '../constants';

const getAllArtists = () => axios({
  url: api.artists,
  method: 'GET',
})
  .then(({ data }) => data.data);

export default getAllArtists;
