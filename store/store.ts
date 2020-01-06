import { useStaticRendering } from 'mobx-react';

import MovieStore from './MovieStore';
import { IProps } from './MovieStore';

interface IPropsInit {
  movieStore?: IProps | undefined;
}

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(props: IPropsInit = {}) {
  const stores = {
    movieStore: new MovieStore(props.movieStore ? props.movieStore : {}),
  };

  if (isServer) {
    return stores;
  }
  if (store === null) {
    store = stores;
  }

  return store;
}
