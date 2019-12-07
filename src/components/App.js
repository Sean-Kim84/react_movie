import React from 'react';
import { Router } from '@reach/router';

import Header from './elements/Header';
import Movie from './Movie';
import NotFound from './NotFound';

import Home from './Home';

import { GlobalStyle } from './styles/GlobalStyle'



const App = () => (
  <React.Fragment>
    <Header />
    <Router>
      <Home path="/"/>
      <Movie path="/:movieId" />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </React.Fragment>

)

export default App;
