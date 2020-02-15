import React from 'react';

import Main from '../components/Main/Main';

const Home = () => (
    <Main />
);

Home.getInitialProps = async ({ mobxStore: { movieStore } }) => {
  await movieStore.getGenreList();
  await movieStore.getMovieList();
  return {};
};

export default Home;
