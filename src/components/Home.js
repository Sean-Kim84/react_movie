import React, { useState, useEffect } from 'react';

import HeroImage from './elements/HeroImage';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';

import { useHomeFetch } from './hooks/useHomeFetch';

const Home = () => {
  const [{state, loading, error}, fetchMovie]  = useHomeFetch();
  console.log(state);
  return (
    <React.Fragment>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </React.Fragment>
  );
}

export default Home;
