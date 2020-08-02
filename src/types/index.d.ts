// Routes
interface IRedirectProps {
  to: string;
  from: string;
  exact?: boolean;
}

interface IRouteProps {
  path: string;
  exact?: boolean;
  component: any;
  redirect?: IRedirectProps;
}

// Characters
interface ICharacter {
  __typename: string;
  name: string;
  id: string;
  image: string;
}

interface IPagesInfo {
  pages: number;
  next?: string;
  prev?: string;
}

interface ICharacterVars {
  page: number;
}

interface IResults {
  results: ICharacter[];
  info: IPagesInfo;
}

interface IPagination {
  currentPage: number;
  info: IPagesInfo;
}
