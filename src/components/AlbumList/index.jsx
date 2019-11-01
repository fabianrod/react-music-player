import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './albumlist.scss';

function AlbumList({ data }) {
  return (
    <div className='item-album-container'>
      {
        // eslint-disable-next-line
        data && data.map(({ name, id, image }) => (
          <div className='item-album' key={id}>
            <Link to={`/songs/${id}`} className='item-album-link'>
              <img src={image} className='item-album__cover' alt={name} />
              <span className='item-album__name'>{name}</span>
            </Link>
          </div>
        ))
      }
    </div>
  );
}

AlbumList.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

AlbumList.defaultProps = {
  data: {},
};

export default AlbumList;
