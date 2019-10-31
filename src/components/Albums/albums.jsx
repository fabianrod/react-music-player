import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import AlbumList from '../AlbumList';
import './albums.scss';

function Albums({ albums: { data }, getAlbums, match: { params } }) {
  useEffect(() => {
    getAlbums(params.id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='albums-page'>
      <Container className='albums'>
        <AlbumList data={data} />
      </Container>
    </div>
  );
}

Albums.propTypes = {
  albums: PropTypes.shape({
    data: PropTypes.array.isRequired,
  }),
  getAlbums: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.object,
  }),
};

Albums.defaultProps = {
  albums: PropTypes.shape({
    data: [],
  }),
  getAlbums: () => {},
  match: PropTypes.shape({
    params: {},
  }),
};

export default Albums;
