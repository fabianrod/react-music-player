import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import ArtistList from '../ArtistList';
import './artists.scss';

function Artists({ artists: { data }, getArtists }) {
  useEffect(() => {
    getArtists();
  }, [getArtists]);
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
    data: PropTypes.object.isRequired,
  }),
};

export default Artists;
