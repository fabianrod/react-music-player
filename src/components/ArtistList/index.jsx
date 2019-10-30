import React from 'react';
import './item-artist.css'

function ArtistList(props) {
  const artists = props.data;
  return(
    <div className='item-artist-container'>
      {
        artists && artists.map(artist => (
          <div className='item-artist' key={artist.id}>
            <img src={artist.image} className='item-artist__cover' alt={artist.name} />
            <span className='item-artist__name'>{artist.name}</span>
          </div>
        ))
      }
    </div>
  )
}

export default ArtistList;