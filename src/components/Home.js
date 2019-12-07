import React, { useState } from 'react';
import {
  API_URL,
  API_KEY,
  API_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from '../config';


// import Components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

// Custom Hook
import { useHomeFetch } from './hooks/useHomeFetch';

//images 
import NoImage from './images/no_image.jpg'

const Home = () => {
  const [{
    state: {
      currentPage,
      totalPages,
      heroImage,
      loading,
      error,
      movies
    }
  }, fetchMovies] = useHomeFetch();
  const [searchTerm, setSearchForm] = useState('');

  if (error) return <div>Something went wrong ...</div>;
  if (!movies[0]) return <Spinner />;

  const loadMoreMovies = () => {
    const serachEndPoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage + 1}`;
    const popularEndPoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage+1}`;
  
    const endpoint = searchTerm ? serachEndPoint : popularEndPoint

    fetchMovies(endpoint);
  };

  return (
    <React.Fragment>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid 
        header={searchTerm ? 'Search Result': 'Popular Movies'}>
        {movies.map((movie) => (
          <MovieThumb 
            key={movie.id} 
            clickable 
            image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}  
          />
          
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}
      
    </React.Fragment>
  );
};

export default Home;
