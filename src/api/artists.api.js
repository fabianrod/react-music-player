import axios from 'axios';

const getAllArtists = () => {
  return axios({
    url: 'http://rubytify-ayenda.herokuapp.com/api/v1/artists',
    method: 'GET',
  })
  .then(({data}) => data.data);
}

export { getAllArtists };