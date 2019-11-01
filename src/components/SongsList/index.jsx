/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './songslist.scss';

function SongsList({ data }) {
  return (
    <div className='item-song-container'>
      {
        data && data.map(({ name, id, preview_url }) => (
          <div className='item-song' key={id}>
            {
              preview_url !== null ? (
              <a href={`${preview_url}`} className='item-song-link'>
              <span className='item-song__name'>{name}</span>
              </a>
            ) : (
              <small className='item-song-warning'>No hay vista previa de la canción</small>
            )}
          </div>
        ))
      }
    </div>
  );
}

SongsList.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    preview_url: PropTypes.string.isRequired,
  }),
};

SongsList.defaultProps = {
  data: {},
};

export default SongsList;
