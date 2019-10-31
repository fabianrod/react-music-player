import React, { useEffect }from 'react';
import Container from 'react-bootstrap/Container'
import ArtistList from '../ArtistList';
import './artists.css';

function Artists({ artists: { data }, getArtists }) {
  useEffect(() => {
    getArtists();
  }, [getArtists]);
  
  return(
    <div className='artists-page'>
      <Container className='artists'>
        <ArtistList data={data} />
      </Container>
    </div>
  )
}

export default Artists;