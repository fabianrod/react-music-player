const baseUrl = 'http://rubytify-ayenda.herokuapp.com/api/v1/';
const api = {
  artists: `${baseUrl}artists`,
  genres: `${baseUrl}genres`,
  albums: {
    url: `${baseUrl}artists/`,
    extend: '/albums',
  },
  songs: `${baseUrl}albums/:id/songs`,
  randomSong: `${baseUrl}genres/:genre_name/random_song`,
};

export default api;
