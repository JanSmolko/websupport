export type Pager = {
  page: number;
  pagesize: number | null;
  items: number;
};

export type GetList<T> = {
  items: Array<T>;
  pager: Pager;
};

export type Post<T> = {
  status: "success" | "error";
  item: T;
  errors: Array<unknown> | Record<string, Array<string>>;
};

export type Put<T> = Post<T>;
export type Delete<T> = Post<T>;
