import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container'
import ArtistList from '../../components/ArtistList';
import { fetchArtistsRequest } from '../../redux/actions/artists';

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

const mapStateToProps = state => ({
  artists: state.artists
})

const mapDispatchToProps = dispatch => ({
  getArtists: () => dispatch(fetchArtistsRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(Artists);