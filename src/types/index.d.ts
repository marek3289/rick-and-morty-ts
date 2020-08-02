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

// Header
type EventType = React.ChangeEvent<HTMLInputElement>;

interface IHeader {
  value: string;
  searchAction: (e: EventType) => void;
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
  search: string;
}

// zrobic extends ICharacterVars z optional
interface IListProps {
  page?: number;
  search?: string;
}

interface IResults {
  results: ICharacter[];
  info: IPagesInfo;
}

interface IPagination {
  currentPage: number;
  info: IPagesInfo;
}
