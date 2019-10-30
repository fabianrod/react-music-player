import React, { useState, useEffect }from 'react';
import Container from 'react-bootstrap/Container'
import ItemArtist from '../../components/ItemArtist';
import './artists.css'
import axios from 'axios';

function Artists() {
  const [data, setData] = useState(null);

  const getData = () => {
    axios.get('http://rubytify-ayenda.herokuapp.com/api/v1/artists')
    .then(data => {
      setData(data.data.data)
    })
  }

  useEffect(() => {
    getData()
  }, []);
  
  return(
    <div className='artists-page'>
      <Container className='artists'>
          <ItemArtist data={data} />
      </Container>
    </div>
  )
}

export default Artists;