import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import ArtistList from '../ArtistList';
import './artists.scss';

function Artists({ artists: { data = [] }, getArtists }) {
  useEffect(() => {
    getArtists();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='artists-page'>
      <Container className='artists'>
        <ArtistList data={data} />
      </Container>
    </div>
  );
}

Artists.propTypes = {
  artists: PropTypes.shape({
    data: PropTypes.array.isRequired,
  }),
  getArtists: PropTypes.func,
};

Artists.defaultProps = {
  artists: PropTypes.shape({
    data: [],
  }),
  getArtists: () => {},
};

export default Artists;
