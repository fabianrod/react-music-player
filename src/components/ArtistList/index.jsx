import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './artistslist.scss';

function ArtistList({ data }) {
  return (
    <div className='item-artist-container'>
      {
        // eslint-disable-next-line
        data && data.map(({ name, id, image }) => (
          <div className='item-artist' key={id}>
            <Link to={`/albums/${id}`} className='item-artist-link'>
              <img src={image} className='item-artist__cover' alt={name} />
              <span className='item-artist__name'>{name}</span>
            </Link>
          </div>
        ))
      }
    </div>
  );
}

ArtistList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape([{
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }])),
};

ArtistList.defaultProps = {
  data: {},
};

export default ArtistList;
