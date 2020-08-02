import { HomePage, DetailsPage } from 'pages';
import { ROUTES } from './constants';
import { Redirect } from 'react-router';

const routesMap: Array<IRouteProps> = [
  {
    path: ROUTES.HOME,
    exact: true,
    component: HomePage,
  },
  {
    path: ROUTES.PAGE,
    exact: true,
    component: HomePage,
  },
  {
    path: ROUTES.DETAILS,
    exact: true,
    component: DetailsPage,
  },
  {
    path: ROUTES.NOT_FOUND,
    component: Redirect,
    redirect: {
      from: ROUTES.NOT_FOUND,
      to: ROUTES.HOME,
      exact: true,
    },
  },
];

export default routesMap;
