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

interface IResults {
  results: ICharacter[];
  info: IInfo;
}

interface IInfo {
  pages: number;
}

interface IResults {
  results: ICharacter[];
  info: IInfo;
}

interface ICharactersList {
  characters: IResults;
}

interface ICharacterVars {
  page: number;
}
