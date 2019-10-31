import axios from 'axios';

const getAllArtists = () => axios({
  url: 'http://rubytify-ayenda.herokuapp.com/api/v1/artists',
  method: 'GET',
})
  .then(({ data }) => data.data);

export default getAllArtists;
