import React from 'react';

import Main from '../components/Main/Main';

const Home = () => (
  <div>
    <Main />
    <style jsx global>{`
      body {
        background-color: #abd2fd;
        margin: 0 !important;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async ({ mobxStore: { movieStore } }) => {
  await movieStore.getGenreList();
  await movieStore.getMovieList();
  return {};
};

export default Home;
