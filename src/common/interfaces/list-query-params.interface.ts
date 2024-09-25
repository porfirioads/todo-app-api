export enum ListQuerySortMode {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type IListQuerySort<T> = {
  [key in keyof T]?: ListQuerySortMode;
};

export interface IListQueryParams<T> {
  search?: string;
  page?: number;
  limit?: number;
  order?: IListQuerySort<T>;
}
