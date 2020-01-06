import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react';
import Movie from '../Movie/Movie';
import { StoreContext } from '../../pages/_app';

interface IMovie {
  id: number;
  adult: boolean;
  poster_path: string;
  genre_ids: Array<number>;
  title: string;
  release_date: string;
}

const Main = observer(() => {
  const {
    movieStore: { movieList, genreList },
  } = useContext(StoreContext);

  const renderMovie = ({ id, title, poster_path, genre_ids, release_date }: IMovie) => {
    const genres = genre_ids.map((idGenre, index, arr) => {
      if (index === arr.length - 1) {
        return genreList[idGenre];
      }
      return genreList[idGenre] + ',';
    });

    const date = release_date.split('-')[0];

    return (
      <Movie
        key={`movieKey-${id}`}
        idMovie={id}
        title={title}
        poster={poster_path}
        genre={genres}
        date={date}
      />
    );
  };

  return (
    <div className="main">
      {movieList!.map(renderMovie)}
      <style jsx>{`
        .main {
          background-color: #abd2fd;
          padding: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
});

export default Main;
