const baseUrl = 'http://rubytify-ayenda.herokuapp.com/api/v1/';
const api = {
  artists: `${baseUrl}artists`,
  genres: `${baseUrl}genres`,
  albums: {
    url: `${baseUrl}artists/`,
    extend: '/albums',
  },
  songs: {
    url: `${baseUrl}albums/`,
    extend: '/songs',
  },
  randomSong: {
    url: `${baseUrl}genres/`,
    extend: '/random_song',
  },
};

export default api;
