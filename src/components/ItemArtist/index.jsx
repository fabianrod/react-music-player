import React from 'react';
import './item-artist.css'

function ItemArtist(props) {
  const artists = props.data;
  return(
    <div className='item-artist-container'>
      {
        artists && artists.map(artist => (
          <div className='item-artist'>
            <img src={artist.image} className='item-artist__cover' />
          </div>
        ))
      }
    </div>
  )
}

export default ItemArtist;