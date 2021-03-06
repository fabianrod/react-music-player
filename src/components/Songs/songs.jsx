import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import SongsList from '../SongsList';
import Loading from '../Loading';
import './songs.scss';

function Songs({ songs: { data = [] }, getSongs, match: { params } }) {
  useEffect(() => {
    getSongs(params.id);
    // eslint-disable-next-line
  }, []);
  return (
    <div className='songs-page'>
      <Container className='songs'>
        {
          data.length !== 0 ? (<SongsList data={data} />) : (<Loading />)
        }
      </Container>
    </div>
  );
}

Songs.propTypes = {
  songs: PropTypes.shape({
    data: PropTypes.array.isRequired,
  }),
  getSongs: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.object,
  }),
};

Songs.defaultProps = {
  songs: PropTypes.shape({
    data: [],
  }),
  getSongs: () => {},
  match: PropTypes.shape({
    params: {},
  }),
};

export default Songs;
