import { HomePage, EpisodesPage, LocationsPage, CharactersPage, NotFound } from 'pages/index';
import { ROUTES } from './constants';

interface IRouteProps {}

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
    component: NotFound,
  },
];

export default routesMap;
