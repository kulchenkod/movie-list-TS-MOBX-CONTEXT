import { observable, action } from 'mobx';
import axios from 'axios';

interface IMovie {
  poster_path: string;
  id: number;
  backdrop_path: string;
  genre_ids: Array<number>;
  title: string;
  release_date: string;
}

interface IDetails {
  backdrop_path: string;
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
}

interface IGenreList {
  [key: number]: string;
}

export interface IProps {
  movieList?: IMovie[] | [];
  genreList?: IGenreList | undefined;
  currentDetailsMovie?: IDetails | undefined;
  currentDetailsMovieVideoKey?: string;
}

interface IItem {
  id: number;
  name: string;
}

class MovieStore {
  @observable movieList: IMovie[] | [] = [];
  @observable genreList: IGenreList = {};
  @observable currentDetailsMovie: IDetails | {} = {};
  @observable currentDetailsMovieVideoKey: string = '';

  constructor(props: IProps) {
    this.movieList = props.movieList || [];
    this.genreList = props.genreList || {};
  }

  @action.bound async getDetailsVideo(movie_id: number) {
    try {
      const {
        data: { results },
      } = await axios.get(`/movie/${movie_id}/videos`);
      this.currentDetailsMovieVideoKey = results[0].key;
    } catch (e) {
      console.log(e, 'Error getDetailsVideo');
    }
  }

  @action.bound async getMovieList() {
    try {
      const {
        data: { results },
      } = await axios.get('/movie/now_playing', {
        params: {
          page: 1,
        },
      });
      this.movieList = results;
      this.currentDetailsMovie = {};
      this.currentDetailsMovieVideoKey = '';
    } catch (e) {
      console.log(e, 'Error getMovieList');
    }
  }

  @action.bound async getGenreList() {
    try {
      const {
        data: { genres },
      } = await axios.get('/genre/movie/list');
      this.genreList = genres.reduce(
        (start: IGenreList, item: IItem) => ({
          ...start,
          [item.id]: item.name,
        }),
        {}
      );
    } catch (e) {
      console.log(e, 'Error getGenreList');
    }
  }

  @action.bound async getDetailsMoive(id: number) {
    try {
      const { data } = await axios.get(`/movie/${id}`);
      this.currentDetailsMovie = data;
    } catch (e) {
      console.log(e, 'Error getDetailsMovie');
    }
  }
}
export default MovieStore;
