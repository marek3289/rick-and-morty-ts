import { HomePage, EpisodesPage, LocationsPage, CharactersPage } from 'pages/index';
import { ROUTES } from './constants';
import { Redirect } from 'react-router';

const routesMap: Array<IRouteProps> = [
  {
    path: ROUTES.HOME.path,
    exact: true,
    component: HomePage,
    meta: {
      title: ROUTES.HOME.name,
    },
  },
  {
    path: ROUTES.EPISODES.path,
    exact: true,
    component: EpisodesPage,
    meta: {
      title: ROUTES.EPISODES.name,
    },
  },
  {
    path: ROUTES.LOCATIONS.path,
    exact: true,
    component: LocationsPage,
    meta: {
      title: ROUTES.LOCATIONS.name,
    },
  },
  {
    path: ROUTES.CHARACTERS.path,
    exact: true,
    component: CharactersPage,
    meta: {
      title: ROUTES.CHARACTERS.name,
    },
  },
  {
    path: ROUTES.NOT_FOUND.path,
    component: Redirect,
    redirect: {
      from: ROUTES.NOT_FOUND.path,
      to: ROUTES.HOME.path,
      exact: true,
    },
  },
];

export default routesMap;
