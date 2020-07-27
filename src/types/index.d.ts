// ROUTES
interface IMetaProps {
  title?: string;
}

interface IRedirectProps {
  to: string;
  from: string;
  exact?: boolean;
}

interface IRouteProps {
  path: string;
  exact?: boolean;
  component: any;
  meta?: IMetaProps;
  redirect?: IRedirectProps;
}
