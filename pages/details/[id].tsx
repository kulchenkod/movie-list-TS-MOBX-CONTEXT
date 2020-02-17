import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react';
import Link from 'next/link';

import { StoreContext } from '../../pages/_app';
import { IProps } from '../../store/MovieStore';

export interface IMovieStore {
  movieStore: IProps;
}

const moment = require('moment');

const Details = observer(() => {
  const router = useRouter();

  const {
    movieStore: {
      getDetailsMoive,
      getDetailsVideo,
      currentDetailsMovieVideoKey,
      currentDetailsMovie: {
        backdrop_path,
        title,
        release_date,
        vote_average,
        budget,
        status,
        poster_path,
        overview,
      },
    },
  } = useContext(StoreContext);

  useEffect(() => {
    getDetailsMoive(router.query.id);
    getDetailsVideo(router.query.id);
  }, []);

  return (
    <div className="details">
      <div className="details__body">
        <div className="details__nav">
          <Link href="/">
            <a className="details__nav-link">Home</a>
          </Link>
          <button className="details__nav-favorite">Add to favorite</button>
        </div>
        <div className="details__title">
          <h1>
            {title} ({moment(release_date).format('YYYY')})
          </h1>
          <div role="bar"></div>
        </div>
        <div className="details__info">
          <div className="details__info-movie">
            <section className="details__info-movie-first">
              <span className="details__info-movie-text">Status: {status}</span>
              <span className="details__info-movie-text">Rate: {vote_average}</span>
              <span className="details__info-movie-text">Budget: {budget} $</span>
              <span className="details__info-movie-text">Overview: {overview}</span>
              <iframe
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen
                src={`https://www.youtube.com/embed/${currentDetailsMovieVideoKey}`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </section>
            <section className="details__info-movie-second">
              <div className="details__info-movie-poster">
                <img
                  className="details__info-movie-img"
                  src={poster_path && process.env.IMG_URL + poster_path}
                  alt={title}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <style jsx>{`
        .details {
          height: 100%;
          background-image: url(${backdrop_path && process.env.IMG_URL_ORIGINAL}${backdrop_path});
          background-position: center;
          background-size: cover;
          color: white;
        }
        .details__body {
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
        }
        .details__title {
          text-align: center;
          background-color: rgba(0, 0, 0, 0.4);
          padding: 5px 0;
        }
        .details__nav-link,
        .details__nav-favorite {
          text-decoration: none;
          text-align: center;
          font-weight: 700;
          display: block;
          max-width: 50px;
          padding: 15px;
          border-radius: 10px;
          background-color: #23b4f8;
          color: white;
        }
        .details__nav-favorite {
          outline: 0;
          border: 0;
          max-width: 150px;
          cursor: pointer;
        }
        .details__nav {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          padding: 10px;
        }
        .details__info {
          max-width: 960px;
          margin: 0 auto;
          padding: 20px;
        }
        .details__info-movie {
          display: flex;
          font-size: 25px;
        }
        .details__info-movie-first,
        .details__info-movie-second {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .details__info-movie-first {
          flex-shrink: 1;
        }
        .details__info-movie-second {
          flex-shrink: 2;
        }
        .details__info-movie-img {
          width: 100%;
        }
        .details__info-movie-poster {
          max-width: 250px;
          align-self: flex-end;
        }
      `}</style>
    </div>
  );
});

export default Details;
