import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

export const Loader = {
  start: () => NProgress.start(),
  done: () => NProgress.done(),
};
