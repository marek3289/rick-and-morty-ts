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

interface ICharacterVars {
  page: number;
  search: string;
}

interface IListProps {
  search: string;
  page: number;
  setPage: any;
}

interface IResults {
  results: ICharacter[];
  info: IPagesInfo;
}

type PageNumberType = number | undefined;

interface IPaginationInfo {
  next: PageNumberType;
  prev: PageNumberType;
}

interface IPagination {
  pageInfo?: IPaginationInfo;
  setPage: (pageNumber: PageNumberType) => void;
  isLoading: boolean | undefined;
}
