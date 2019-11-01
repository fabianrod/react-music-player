import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getGenres from '../../api/genres.api';
import getRandomSong from '../../api/randomSong.api';
import './home.scss';

function Home() {
  const [genres, setGenres] = useState([]);
  const [randomSong, setRandomSong] = useState('');

  const fetchGenres = async () => {
    const allGenres = await getGenres();
    setGenres(allGenres);
  };

  const fetchRandomSong = async () => {
    const number = Math.round((Math.random() * (genres.length - 1) + 1));
    const song = await getRandomSong(genres[number]);
    setRandomSong(song);
  };

  useEffect(() => {
    fetchGenres();
  }, []);
  useEffect(() => {
    fetchRandomSong();
    // eslint-disable-next-line
  }, [genres])

  return (
    <div className='home-page'>
      <div className='main-link'>
        <Link to='/artists' className='link-artists'>
          Show artists
        </Link>
        &nbsp;
        <span role='img' aria-label='emoji'>😎</span>
      </div>
      <a href={randomSong.preview_url} className='btn btn-random-song'>Play random song</a>
    </div>
  );
}

export default Home;
