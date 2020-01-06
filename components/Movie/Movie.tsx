import React from 'react';
import Link from 'next/link';

interface IProps {
  poster: string;
  title: string;
  date: string;
  genre: Array<string>;
  idMovie: number;
}

const Movie = ({ poster, title, date, genre, idMovie }: IProps) => {
  return (
    <Link href="/details/[id]" as={`/details/${idMovie}`}>
      <a className="movie">
        <div>
          <div className="movie__img">
            <img
              className="movie__img-item"
              src={process.env.IMG_URL + poster}
              alt={title}
            />
          </div>
          <div className="movie__title">
            <h4 className="movie__title-name">{title}</h4>
            <span>{date} </span>
            <span>{genre.join(' ')}</span>
          </div>
        </div>
        <style jsx>{`
          .movie {
            display: block;
            max-width: 320px;
            margin-bottom: 30px;
            border-radius: 20px;
            cursor: pointer;
          }
          .movie:hover {
            transform: scale(1.1);
          }
          .movie__img {
            font-size: 0;
          }
          .movie__img-item {
            width: 100%;
          }
          .movie__title-name {
            margin: 0;
          }
          .movie__title {
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
          }
        `}</style>
      </a>
    </Link>
  );
};

export default Movie;
